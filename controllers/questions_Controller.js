const db = require('../db/connections.js');

function getQuestionsAll(req, res, next) {
  db('questions')
  .then(questions => {
    res.json({questions})
  })
}

function getOneQuestion(req, res, next) {
  let id = req.params.id;

  db('questions')
  .where({id}).first()
  .then(question => {
    res.json({question})
  })
}

module.exports = {getQuestionsAll, getOneQuestion}
