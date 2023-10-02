const { Logs } = require('../models/logsModel.js');

const logsController = {

  getAllLogs: async (req, res) => {
    try {
      const logs = await Logs.findAll({
        order: [
          ['log_id', 'DESC']  // Order by log_id in descending order
        ]
      });
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = logsController ;