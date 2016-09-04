var express = require('express');
var Sport = require('../../Model/Sport.js');
var router = express.Router();


router.get('/', function (req, res) {
    Sport.find({},{name:1},function(err,sports){
        if (err){
            console.log('Mongodb error');
            res.send({code:"401",reason:"Couldn't connect to Mongodb"})
        }else{
            res.send(sports);
        }
    });
});
module.exports = router;

