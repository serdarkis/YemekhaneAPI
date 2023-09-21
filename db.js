const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize({

  dialect: 'postgres',
  host: process.env.DB_HOST, // "localhost"
  port: process.env.DB_PORT, 
  database: process.env.DB_DATABASE, //  "Deneme"
  username: process.env.DB_USERNAME, // "postgres"
  password: process.env.DB_PASSWORD, // "postgres"
});


module.exports = sequelize; 


/**
 * host: process.env.DB_HOST, // "localhost"
  port: process.env.DB_PORT, 
  database: process.env.DB_DATABASE, //  "Deneme"
  username: process.env.DB_USERNAME, // "postgres"
  password: process.env.DB_PASSWORD, // "postgres"
 */