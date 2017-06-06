const db = require('../db/connections.js');

function getUsersAll(req, res, next) {

  let table = req.baseUrl

  if (Object.keys(`req.query`).length > 0) {
    db('users').where(req.query)
    .then(results => {
      res.json({results})
    })
  } else {
    db('users')
    .then(users => {
      res.json({users})
    })
  }

}

function getOneUser(req, res, next) {
  let id = req.params.id;

  db('users')
  .where({id}).first()
  .then(user => {
    res.json({user})
  })
}

module.exports = {getUsersAll, getOneUser}
