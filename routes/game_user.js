const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/game_user_Controller.js');

//PUT update game_user game
router.put('/game', dbUpdate.updateGameUserGame)

//PUT update game_user question
router.put('/question', dbUpdate.updateGameUserQuestion)

//POST new game_user user entry
router.post('/new', dbUpdate.addGameUser)

//GET user data by search
router.get('/', dbGet.getData);

module.exports = router;
