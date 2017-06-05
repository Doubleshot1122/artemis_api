var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"name":"Donny", "name2":"Summer", "name3":"Joshua"});
});

module.exports = router;
