const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions_Controller.js')


//get ALL user data
router.get('/', questionsController.getQuestionsAll);
router.get('/:id', questionsController.getOneQuestion)

module.exports = router;
 
