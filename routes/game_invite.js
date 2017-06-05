const express = require('express');
const router = express.Router();
const gameInviteController = require('../controllers/game_invite_Controller.js')


//get ALL user data
router.get('/', gameInviteController.getAll);
router.get('/:id', gameInviteController.getOneGame)

module.exports = router;
 
