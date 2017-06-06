const express = require('express');
const router = express.Router();
const dbGet = require('../controllers/all_queries.js')


//get ALL user data
router.get('/', dbGet.getData);

module.exports = router;
