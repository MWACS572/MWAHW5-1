var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

/* GET home page. */
router.get('/', function(req, res, next) {

  fetch("http://jsonplaceholder.typicode.com/users/")
      .then(data=>data.json())
      .then(data=>res.render('index', {title:data}));

});

module.exports = router;
