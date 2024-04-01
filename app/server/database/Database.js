const { Client } = require('pg');
const conexion = require('./Conexion.js').Conexion;

Database = {};

module.exports.Database = Database;

Database.checkTableAndCreate = function(model){
  console.log("Check table ------------->",model.name);
  var client = new Client(conexion.local);
  client.connect();

  client.query("SELECT DISTINCT table_name FROM information_schema.columns WHERE table_name='"+model.name+"'",(err,res) => {
    if(err){
      console.log('check '+model.name+' error',err);
    }else{
      if(res.rows.length==0){
        console.log('tabla '+model.name+' no existe');
        this.createTable(model);
      }else{
        model.status=true;
        console.log('tabla '+model.name+' ya existe');
      }
    }
    client.end();
  });
}

Database.createTable = function(model){
  console.log("create table "+model.name);
  let clientpg = new Client(conexion.local);
  let query = this.queryCreate(model);
  console.log("query create ",query);
  clientpg.connect();
  clientpg.query(query,(err,res) => {
    if (err) {
      console.log('table '+model.name+' error',err);
    }else {
      // console.log(res);
      console.log('Tabla '+model.name+" creada con exito.");
    }
    clientpg.end();
  });
}

Database.queryCreate = function(model){
  let res = "CREATE TABLE "+model.name+"(";
  let sep = ",";

  for (var i = 0; i < model.params.length; i++) {
    if((i+1)>=model.params.length) sep = "";
    res = res+model.params[i]+sep;
  }
  res = res+");"
  return res;
}
