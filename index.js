console.log("cargando ...");

const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const passport = require('passport');
const quickselect = require('quickselect'); // Used to compute the median for latency
// const routesAuth = require('./routes/auth.js'):
const routesAuth = require('./app/server/routes/auth.js');

const GameServer = require('./app/server/system/GameServer.js').GameServer;

let gameServer = new GameServer(server);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.pluralize = require('pluralize');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false, // don't save session if unmodified
  saveUninitialized: false // don't create session until something stored

}));

app.use(csrf());

app.use(passport.authenticate('session'));
app.use(function(req, res, next) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !! msgs.length;
  req.session.messages = [];
  next();
});
app.use(function(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/plugins',express.static(__dirname + '/plugins'));
app.use('/app',express.static(__dirname + '/app'));
app.use('/assets',express.static(__dirname + '/assets'));

app.use('/',routesAuth);

server.listen(process.env.SOCKET_PORT,()=>{
  console.log('Escuchando en '+server.address().port);
  server.clientUpdateRate = 1000/5;
  gameServer.readMap();
  // server.setUpdateLoop();
});
