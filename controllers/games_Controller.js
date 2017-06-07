const db = require('../db/connections.js');

function updateGame(req, res, next) {
  let id = req.body.id;
  let game = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    start_time: req.body.start_time,
    start_loc_lat: req.body.start_loc_lat,
    start_loc_long: req.body.start_loc_long
  };

  db('games')
  .update(game, '*')
  .where({id})
  .then(game => {
    console.log(game);
    res.json(game)
  })
}

module.exports = {updateGame}
