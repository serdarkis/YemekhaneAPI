const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize({

  dialect: 'postgres',
  host: 'localhost', // "localhost"
  port: 5432, 
  database: 'Deneme', //  "Deneme"
  username: 'postgres', // "postgres"
  password: 'postgres', // "postgres"
});


module.exports = sequelize; 


/**
 * host: process.env.DB_HOST, // "localhost"
  port: process.env.DB_PORT, 
  database: process.env.DB_DATABASE, //  "Deneme"
  username: process.env.DB_USERNAME, // "postgres"
  password: process.env.DB_PASSWORD, // "postgres"
 */