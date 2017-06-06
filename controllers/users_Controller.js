const db = require('../db/connections.js');

function postNewUser(req, res, next) {
  let user = {
    display_name: req.body.display_name || 'required field',
    email: req.body.email || 'required field',
    icon: req.body.icon || 'required field',
    password: req.body.password || 'required field',
    user_name: req.body.user_name || 'required field'
  }

  if(Object.values(user).includes('required field')){
    user.error = "data is missing"
    res.json({user})
  } else {
    db('users').insert(user, '*')
    .then(newUser => {
      res.json({newUser})
    })

  }


}


module.exports = {postNewUser}
