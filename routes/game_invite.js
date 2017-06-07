const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/game_invite_Controller.js')

//post add new entry
router.post('/', dbUpdate.insertGameInvites)

//put update game
router.put('/', dbUpdate.updateGameInvite)

//get ALL user data
router.get('/', dbGet.getData);

module.exports = router;
