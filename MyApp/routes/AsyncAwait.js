/**
 * Created by Owner on 9/9/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

async function AsyncFunction(){
    try{
        var fetchForAsyncAwait= await fetch("http://jsonplaceholder.typicode.com/users/")
            .then(data=>data.json());
        return fetchForAsyncAwait;
    }catch(error){
        console.log(error.message);
    }
}

router.get('', function(req, res, next){
   AsyncFunction().then(data=>res.render('index', {title:data}));
});

module.exports = router;