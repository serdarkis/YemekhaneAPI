// routes/index.js
const express = require('express');
const router = express.Router();

const memberController = require('../controllers/memberController');
//member oluşturma route
router.post('/create-member', memberController.createMember);
//member read route
router.get('/read-member/:user_id', memberController.readMember);
//member update route
router.put('/update-member/:user_id', memberController.updateMember);
//member delete route
router.delete('/delete-member/:user_id', memberController.deleteMember);


//const createLogs = require('../models/logsModel');
//router.post('/create-logs', createLogs.createLogs);

//sırf deneme yorumu



module.exports = router;
