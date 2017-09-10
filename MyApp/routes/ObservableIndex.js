/**
 * Created by Owner on 9/9/2017.
 */
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');
router.get('/', function(req, res, next){
    var fetchForObserver = fetch("http://jsonplaceholder.typicode.com/users/")
        .then(data=>data.json());
    Rx.Observable.fromPromise(fetchForObserver)
        .subscribe(e=>res.render('index', {title:e}));
});

module.exports = router;