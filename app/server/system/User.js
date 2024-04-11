const { Client } = require('pg');
const bcrypt = require('bcrypt');
const conexion = require('../database/Conexion.js').Conexion;

const User = {};

module.exports.User = User;

User.create = (data, response) => {

  password = bcrypt.hashSync(data.password, 10);
  let clientpg = new Client(conexion.local);

  let query = this.createQuery(data.name, password);

  clientpg.connect();

  clientpg.query(query,function(err,res){
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
    clientpg.end();
  });
}

User.createValidation = function(name){
  client
}
User.createQuery = function(name,password){
  return "INSERT INTO users (name, password) VALUES ('"+name+"','"+password+"')";
}
