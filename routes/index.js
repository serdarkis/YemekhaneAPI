// routes/index.js
const express = require('express');
const router = express.Router();

const UserBalanceView = require('../models/UserBalanceView');
//Balance için frontende yansıtılan view
UserBalanceView.createView();


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
