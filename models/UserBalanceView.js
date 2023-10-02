const sequelize = require('../db');

const UserBalanceView ={
  createView: async function(){
    const createViewQuery = `
          CREATE VIEW user_balance_view AS
          SELECT members.firstname, members.lastname, logs.user_id, SUM(logs.amount_changed) AS total_balance
          FROM members
          INNER JOIN logs ON members.user_id = logs.user_id
          GROUP BY logs.user_id, members.firstname, members.lastname
          ORDER BY logs.user_id;
        `;

        try {
            await sequelize.query(createViewQuery);
            console.log('View Oluşturuldu');
        } catch (error) {
            console.error('View oluşturulurken bir hata meydana geldi:', error);
        }
  }
}

module.exports = UserBalanceView;
