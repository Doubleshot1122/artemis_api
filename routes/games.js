const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games_Controller.js')


//get ALL user data
router.get('/', gamesController.getGamesAll);
router.get('/:id', gamesController.getOneGame)

module.exports = router;
