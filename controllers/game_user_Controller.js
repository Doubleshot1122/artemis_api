const db = require('../db/connections.js');

function getAll(req, res, next) {
  db('game_user')
  .then(game_user => {
    console.log(game_user[0]);
    res.json({game_user})
  })
}

function getOneGame(req, res, next) {
  let id = req.params.id;
  console.log("ID", id);
  db('game_user')
  .where('game_id', `${id}`)
  .then(game_user_by_game => {
    console.log(game_user_by_game);
    res.json({game_user_by_game})
  })
}

module.exports = {getAll, getOneGame}
