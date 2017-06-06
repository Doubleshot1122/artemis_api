const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/game_user_Controller.js');


//get ALL user data
router.get('/', dbGet.getData);

module.exports = router;
