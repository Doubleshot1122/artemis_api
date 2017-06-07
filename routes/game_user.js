const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/game_user_Controller.js');


//PUT update game_user
router.put('/', dbUpdate.updateGameUser)

//GET user data by search
router.get('/', dbGet.getData);

module.exports = router;
