const db = require('../db/connections.js');

function postNewUser(req, res, next) {
  let user = {
    display_name: req.body.display_name || 'required field',
    email: req.body.email || 'required field',
    icon: req.body.icon || 'required field',
    password: req.body.password || 'required field',
    user_name: req.body.user_name || 'required field'
  }
  
  if(user.display_name === 'required field'
    || user.email === 'required field'
    || user.icon === 'required field'
    || user.password === 'required field'
    || user.user_name === 'required field'){
    user.error = "data is missing"
    res.json({user})
  } else {
    db('users').insert(user, '*')
    .then(newUser => {
      console.log("success", newUser);
      res.json({newUser})
    })
    .catch(err => {
      res.json(err)
    })
  }
}


module.exports = {postNewUser}
