const { DataTypes } = require('sequelize');
const sequelize = require('../db');

/**
 * aşağıdaki terimler javascript de ne demek 
 * ' '
 * " "
 * $
 * {}
 * []
 * /
 * \
 * =>
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
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'logs' });

sequelize.sync();

const createLogs = async (req, res) => {
  try {
    // Yeni üye bilgilerini al
    const {user_id,log_type,location } = req.body;

    // Member modeli kullanarak yeni bir üye oluştur
    const newLogs = await Logs.create({
      user_id,
      log_type,
      location,
    });

    // Üye başarıyla oluşturulduğunda bir yanıt gönder
    res.status(201).json(newLogs);
  } catch (error) {
    // Hata durumunda bir hata yanıtı gönder
    console.error(error);
    res.status(500).json({ error: 'Üye oluşturulamadı' });
  }
};

module.exports = { Logs, createLogs };

