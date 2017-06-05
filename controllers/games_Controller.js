const db = require('../db/connections.js');

function getGamesAll(req, res, next) {
  db('games')
  .then(games => {
    console.log(games[0]);
    res.json({games})
  })
}

function getOneGame(req, res, next) {
  let id = req.params.id;

  db('games')
  .where({id}).first()
  .then(game => {
    console.log(game);
    res.json({game})
  })
}

module.exports = {getGamesAll, getOneGame}
