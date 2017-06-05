const db = require('../db/connections.js');

function getUsersAll(req, res, next) {
  db('users')
  .then(users => {
    console.log(users[0]);
    res.json({users})
  })
}

function getOneUser(req, res, next) {
  let id = req.params.id;

  db('users')
  .where({id}).first()
  .then(user => {
    console.log(user);
    res.json({user})
  })
}

module.exports = {getUsersAll, getOneUser}
