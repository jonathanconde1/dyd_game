const { Client } = require('pg');
const  JSONdb  =  require ( 'simple-json-db' );
const db = new  JSONdb ( './app/server/database/template_avatar.json' );

const conexion = require('../database/Conexion.js').Conexion;

var Avatar = {};

module.exports.Avatar = Avatar;

Avatar.allTemplate = (req, response) => {
  let templates = db.get("avatars");
  // console.log(templates);
  let aux =[];
  for (var index in templates) {
    aux.push({id:index, class:templates[index].class, race:templates[index].race})
  }

  response.status(200).send({
    success: true,
    message: 'Exito al cargar templates',
    data: aux
  });
}

Avatar.getId = (req, response) => {
  let templates = db.get("avatars");
  let id = req.query.id;
  id = parseInt(id);
  console.log("get id avatar",id);

  console.log("id",id);
  let aux =[];
  for (var index in templates) {
    if(parseInt(index)==id) aux.push(templates[index]);
  }

  response.status(200).send({
    success: true,
    message: 'Exito al cargar templates view',
    data: aux
  });
}

Avatar.all = (req,response) => {
  let client = new Client(conexion.local);
  client.connect();
  // client.query("select id, name, clase, date_create from avatars where delete=false",(err,res) => {
    client.query("select a.id, a.user_id, u.name, a.name as avatar, a.nivel, a.clase, a.raza, a.experiencia, a.oro from users as u LEFT JOIN  avatars as a ON u.id=a.user_id where a.delete=false",(err,res) => {
    if(err){
      response.status(500).send({
        success: 'false',
        message: 'Error',
        data: err,
      });
    }else{
      response.status(200).send({
        success: true,
        message: 'Exito al cargar avatars',
        data: res.rows
      });
    }
  });
}
