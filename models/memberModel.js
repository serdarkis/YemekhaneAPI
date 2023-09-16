const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Member = sequelize.define('member', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { sequelize, modelName: 'member' });

sequelize.sync();

module.exports = { Member };

