const { Client } = require('pg');
const dotenv = require('dotenv').config();

const Conexion = {}


Conexion.local = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
};


module.exports.Conexion = Conexion;
