const express = require('express');
const router = express.Router();
const gameUserController = require('../controllers/game_user_Controller.js')


//get ALL user data
router.get('/', gameUserController.getAll);
router.get('/:id', gameUserController.getOneGame)

module.exports = router;
 
