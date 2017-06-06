const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js');
const dbUpdate = require('../controllers/users_Controller.js');



//get ALL user data
router.post('/new/', dbUpdate.postNewUser);

router.get('/', dbGet.getData);


module.exports = router;
