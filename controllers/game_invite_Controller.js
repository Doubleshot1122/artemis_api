const db = require('../db/connections.js');

function updateGameInvite(req, res, next) {

  let game_invite = {
    user_id: req.body.user_id,
    game_id: req.body.game_id,
    invite_status: req.body.invite_status
  };

  db('game_invite')
  .update(game_invite, "*")
  .where({user_id: game_invite.user_id, game_id: game_invite.game_id})
  .then(game_invite => {
    res.json(game_invite)
  })
  .catch(err =>{
    res.json(err)
  })
}

function insertGameInvites(req, res, next) {
  let game_invite = {
    user_id: req.body.user_id,
    game_id: req.body.game_id,
    invite_status: "pending"
  };

  db('game_invite')
  .where({user_id: game_invite.user_id, game_id: game_invite.game_id})
  .then(result => {
    if (result.length > 0) {
      res.json({error: "game_id and user_id combination already exsists perform a PUT instead of a POST"})
    }else {
      db('game_invite')
      .insert(game_invite, '*')
      .then(results => {
        res.json(results)
      })
    }
  })
  .catch(err => {
    res.json(err)
  })


}

module.exports = {updateGameInvite, insertGameInvites}
