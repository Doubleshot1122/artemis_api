const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_Controller.js')


//get ALL user data
router.get('/', usersController.getUsersAll);
router.get('/:id', usersController.getOneUser)

module.exports = router;
 
