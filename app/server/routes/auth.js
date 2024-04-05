var express = require('express');
const bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const { Client } = require('pg');

//const agentServer = require('../js/server/AgentServer.js').AgentServer;
const conexion = require('../database/Conexion.js').Conexion;
const user = require('../system/User.js').User;
//const report = require('../js/server/Report.js').Report;
// const history = require('../js/server/History.js').History;


var router = express.Router();

passport.use(new LocalStrategy(function verify(username, password, cb) {
  var client = new Client(conexion.local);

  client.connect();
  var sql = "SELECT * FROM users WHERE users.name ='"+username+"' AND users.delete=false";
  client.query(sql,(err,res) => {
    // console.log(err,res);
    if(err){
      console.log('err',err);
    }else{
      if(res.rows.length>0){
        var user = res.rows[0];
        if(bcrypt.compareSync(password, user.password)){
          console.log('pass correcto');
          return cb(null, user);
        }else{
          console.log('pass incorrecto');
          return cb(null, false, { message: 'Usuario o password incorrecto.' });
        }
      }else{
        //usuario incorrecto ...
        console.log('El usuario no existe');
        return cb(null, false, { message: 'El usuario no existe' });
      }
    }
    // if(bcrypt.compareSync(password, user.password))
  });


}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    let client = new Client(conexion.local);
    client.connect();
    client.query("SELECT p.guard_name FROM user_has_roles AS ur LEFT JOIN role_has_permissions AS rp ON ur.role_id=rp.role_id LEFT JOIN permissions AS p ON rp.permission_id=p.id WHERE ur.user_id='"+user.id+"' AND ur.delete=false AND rp.delete=false AND p.delete=false",function(err,res){
      if(err){
        console.log(err);
      }else{

        let permissions = [];
        // console.log(res.rows);
        let array = res.rows;
        for (var i = 0; i < array.length; i++) {
          permissions.push(array[i].guard_name);
        }
        cb(null, { id: user.id, username: user.name, permissions:permissions });
      }

      client.end();
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

router.get('/demo', (req, res, next) => {
  console.log("req",req.query);
  console.log("req",req.query.id);
  // console.log("res",res)


  res.render('demo',{id: req.query.id});
});
router.get('/map6', (req, res, next) => {
  console.log("req",req.query);
  console.log("req",req.query.id);
  // console.log("res",res)
  res.render('map6',{id: req.query.id});
});
router.get('/',(req,res,next) => {
  console.log("hello /");
  if(req.isAuthenticated())return next();
  res.redirect("/login");
},(req,res,next) => {
  // console.log("req.user",req.user);
  // history.create(req.user.id,"Ingreso al sistema");
  res.render('index', { user: req.user });
});


// router.get('/setting',(req,res,next) => {
//   if(req.isAuthenticated())return next();
//   res.redirect("/login");
// },(req,res,next) => {
//   res.render('setting');
// });

// router.get('/setting',(req,res,next) => {
//   if(req.isAuthenticated())return next();
//   res.redirect("/login");
// },(req,res,next) => {
//   res.render('setting');
// });

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/registrar', function(req, res, next) {
  res.render('register');
});
router.post('/login/password', passport.authenticate('local', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login',
  failureMessage: true
}));

router.post('/register_user', function (req, res) {
  const { name, password, password_repeat } = req.body;
  let data = {
    name: name,
    password: password,
    password_repeat: password_repeat
  }

  console.log("enviando datos ..",name);
  user.create(data, res);
});

router.post('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


// router.post('/restore',(req,res,next) => {
//   if(req.isAuthenticated())return next();
//   res.redirect("/login");
// },(req,res,next) => {
//   const { imei } = req.body;
//   agentServer.restoreImei(imei,res);
// });



module.exports = router;
