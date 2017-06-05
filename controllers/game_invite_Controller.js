const db = require('../db/connections.js');

function getAll(req, res, next) {
  db('game_invite')
  .then(game_invite => {
    res.json({game_invite})
  })
}

function getOneGame(req, res, next) {
  let id = req.params.id;

  db('game_invite')
  .where('game_id', `${id}`)
  .then(game_invite_by_game => {
    res.json({game_invite_by_game})
  })
}

module.exports = {getAll, getOneGame}
