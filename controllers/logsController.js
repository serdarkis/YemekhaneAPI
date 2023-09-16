// controllers/logsController.js
const logsModel = require('../models/logsModel.js');

/**
       * CREATE (MEMBER)
       * READ (PARAMETER)
       * UPDATE (PARAMETER, MEMBER)
       * DELETE (MEMBER)
       */      

/**
 * Github da main branch yaninda
 * develop branch i oluştur
 * yapılanları oraya once commit sonra merge
 * merge lemede kullanılan tag leri öğren 
 * RFR, BUGFIX, DRAFT, FEATURE vs.
 */

const logsController = {
    async createLogs(req, res) {
        console.log(req.body);
        const {log_id, location, time,log_type} = req.body;

        try {
            const newLogs = await logsModel.addLogs(log_id, location, time,log_type);
            res.json(newLogs);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    },
};

module.exports = logsController;
