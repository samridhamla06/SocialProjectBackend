
var express = require('express');
var Sport = require('../../Model/Sport.js');
var router = express.Router();


router.post('/', function (req, res) {
    var newSport = new Sport(req.body);
    newSport.save(function(err){
        if (err){
            console.log("error is " + JSON.stringify(err.message));
            res.send({code: "401"});
        }else{
            res.send({code: "202"});//event created
        }
    });
});
module.exports = router;

