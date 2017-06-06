const db = require('../db/connections.js');

function getData(req, res, next) {

  let base = req.baseUrl;
  let table = base.replace('/','');

    db(table).where(req.query)
    .then(result => {
      res.json({result})
    })
    .catch(err => {
      let error = {
        name: err.routine,
        hint: err.hint
      }
      res.json(error)
    })
}

module.exports = {getData}
