const db = require('../db/connections.js');

function updateGameUserGame(req, res, next) {
  let user_id = req.body.user_id;
  let game_user = {
    game_id : req.body.game_id,
    question_id : 1
  };

  db('game_user')
  .update(game_user, '*')
  .where({user_id})
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    res.json({message: "something went wrong"})
  })

}

function updateGameUserQuestion(req, res, next) {
  let game_user = {
    game_id : req.body.game_id,
    user_id : req.body.user_id,
    question_id : req.body.question_id
  };

  db('game_user')
  .update({question_id: game_user.question_id}, '*')
  .where({game_id: game_user.game_id, user_id: game_user.user_id})
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    res.json({message: 'something went wrong'})
  })

}

function addGameUser(req, res, next) {
  let game_user = {
    game_id : req.body.game_id,
    user_id : req.body.user_id,
    question_id : 1
  };

  db('game_user')
  .where('user_id', game_user.user_id)
  .then(result => {
    if (result.length > 0) {
      res.json({error: "user_id already exsists perform a PUT instead of a POST"})
    }else {
      db('game_user')
      .insert(game_user, '*')
      .then(results => {
        res.json(results)
      })
    }
  })
  .catch(err => {
    res.json({message: 'something went wrong'})
  })
}


module.exports = {updateGameUserGame, updateGameUserQuestion, addGameUser}
