const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Member = sequelize.define('member', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //Son değişen amountu tutar ve bütçeyi kontrol etmek için kullanılır.
  lcAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { sequelize, modelName: 'member',timestamps: false, });

sequelize.sync();

module.exports = { Member };

