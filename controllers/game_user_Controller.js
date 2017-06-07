const db = require('../db/connections.js');

function updateGameUser(req, res, next) {
  let questionData = {
    game_id : req.body.game_id,
    user_id : req.body.user_id,
    question_id : req.body.question_id
  };
  let scenario = req.body.scenario;

  newGame(questionData, scenario, res);

}


function newGame(questionData, scenario, res) {
  db('game_user').where('user_id', questionData.user_id)
  .then(results =>{
    console.log(results);
    res.json(results);
  })
}

module.exports = {updateGameUser}
