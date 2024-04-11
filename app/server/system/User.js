const { Client } = require('pg');
const bcrypt = require('bcrypt');
const conexion = require('../database/Conexion.js').Conexion;

const User = {};

module.exports.User = User;

User.create = (data, response) => {
  User.validation(data.name, data.password, response);
}

User.validation = function(name, password, response){
  let clientpg = new Client(conexion.local);

  let query = this.createQuery(name, password);

  clientpg.connect();

  clientpg.query("select * from users where name='"+name+"'", function(err,res){
      if(err){
        console.log(err);
      }else{
        if(res.rows.length>0){
          console.log("El usuario ya existe");
          response.status(200).send({
            success: false,
            message: 'El usuario "'+name+'" ya existe ...',
            data: {name:name},
          });
        }else{
          User.insert(name, password, response);
        }
      }
      clientpg.end();
  });
}
User.insert = function(name, password, response){

  let clientpg = new Client(conexion.local);

  let query = this.createQuery(name, password);

  clientpg.connect();

  clientpg.query(query,function(err,res){
    if(err){
      console.log("err insert",err);
      response.status(400).send({
        success: false,
        message: 'Erro al insertar usuario a la BD',
        data: {name:name},
      });
    }else{
      response.status(200).send({
        success: true,
        message: 'Exito al crear usuario ...',
        data: {name:name},
      });
    }
    clientpg.end();
  });
}
User.createQuery = function(name, password){
  password = bcrypt.hashSync(password, 10);
  return "INSERT INTO users (name, password) VALUES ('"+name+"','"+password+"')";
}
