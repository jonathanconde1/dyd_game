const { Client } = require('pg');
const  JSONdb  =  require ( 'simple-json-db' );
const db = new  JSONdb ( './app/server/database/template_avatar.json' );

const conexion = require('../database/Conexion.js').Conexion;

var Avatar = {
  name:'avatars',
  params:[
    "id serial"
    "user_id INTEGER",
    "name VARCHAR",
    "slots",
    "image",
    "race",
    "class",
    "level",
    "background",
    "alignment",
    "experience_points",
    "force",
    "skill",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
    "inspiration",
    "competition_bonus",
    "salvation_force",
    "salvation_skill",
    "salvation_constitution",
    "salvation_intelligence",
    "salvation_wisdom",
    "salvation_charisma",
    "armor",
    "initiative",
    "speed",
    "hit_points_max",
    "hit_points",
    "temp_hit_points",
    "salvation_success",
    "salvation_failed",
    "status",
    "personality_traits",
    "ideals",
    "links",
    "defects",
    "attributes_default",
    "equipment",
    "competencies",
    "language"
  ]
};

module.exports.Avatar = Avatar;
Avatar.register = (user,data,response) => {
    console.log(".user:",response.user);
}
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
