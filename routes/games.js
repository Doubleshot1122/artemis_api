const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js')
const dbUpdate = require('../controllers/games_Controller.js')

//PUT update game
router.put('/', dbUpdate.updateGame)

//get ALL user data
router.get('/', dbGet.getData);

module.exports = router;
