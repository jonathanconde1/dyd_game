const { Client } = require('pg');
const bcrypt = require('bcrypt');
const conexion = require('../database/Conexion.js').Conexion;

const User = {};

module.exports.User = User;

User.create = (data, response) => {
  console.log("data user",data.name);
  console.log("conexion",conexion);
  // console
  password = bcrypt.hashSync(data.password, 10);
  var clientLocal = new Client(conexion.local);
  clientLocal.connect();
  clientLocal.query("INSERT INTO users (name, password) VALUES ('"+data.name+"','"+password+"')",function(err,res){
    if(err){
      console.log("err insert",err);
      response.status(400).send({
        success: false,
        message: 'Erro al insertar usuario a la BD',
        data: {name:data.name},
      });
    }else{
      console.log("exito al crear ...");
      // response.redirect('/login');
      response.status(200).send({
        success: true,
        message: 'Exito al crear usuario ...',
        data: {name:data.name},
      });
    }
    clientLocal.end();
  });
}
