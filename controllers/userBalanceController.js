const UserBalanceView = require('../models/UserBalanceView.js');
const sequelize = require('../db');

const userBalanceController = {
  getAllBalances: async (req, res) => {
    try {
      await UserBalanceView.createView(); // Create the view
      const userBalanceData = await sequelize.query('SELECT * FROM user_balance_view', { type: sequelize.QueryTypes.SELECT });
      res.json(userBalanceData);
    } catch (error) {
      console.error('API error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = userBalanceController;
