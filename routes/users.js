const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/users_Controller.js');

//POST create new user
router.post('/', dbUpdate.postNewUser);

//GET user data by search
router.get('/', dbGet.getData);


module.exports = router;
