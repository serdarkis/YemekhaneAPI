// routes/index.js

const express = require('express');
const router = express.Router();

const userBalanceController = require('../controllers/userBalanceController');
router.get('/get-balanceTable', userBalanceController.getAllBalances);


const logsController = require('../controllers/logsController');
//Logs tablosunu yansıtma fonksiyonu
router.get('/get-logstable',logsController.getAllLogs);


const memberController = require('../controllers/memberController');

//member oluşturma route
router.post('/create-member', memberController.createMember);
//member read route
router.get('/read-member/:user_id', memberController.readMember);
//member update route
router.put('/update-member/:user_id', memberController.updateMember);
//member delete route
router.delete('/delete-member/:user_id', memberController.deleteMember);
//member balance update route 
router.put('/changeBalance-member/:user_id', memberController.changeMemberBalance);


module.exports = router;
