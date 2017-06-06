const express = require('express');
const router = express.Router();
const db = require('../controllers/all_queries.js')


//get ALL user data
router.get('/', db.getData);

module.exports = router;
