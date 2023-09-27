const { Logs } = require('../models/logsModel.js');

const logsController = {

  getAllLogs: async (req, res) => {
    try {
      const logs = await Logs.findAll();
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = logsController ;