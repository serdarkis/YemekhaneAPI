const { DataTypes } = require('sequelize');
const sequelize = require('../db');

/**
 * log_id
 * user_id
 * log_type
 * balance_changed
 * memberModelde yapılan değişimleri kaydeden model bu.
 * 
 */

const Logs = sequelize.define('logs', {
  log_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  log_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount_changed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { sequelize, modelName: 'logs' });

sequelize.sync();

module.exports = { Logs };

