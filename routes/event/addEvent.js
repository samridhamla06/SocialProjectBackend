var express = require('express');
var Event = require('../../Model/Event.js');
var router = express.Router();


router.post('/', function (req, res) {
    var newEvent = new Event(req.body);
    newEvent.save(function(err){
        if (err){
            console.log("error is " + JSON.stringify(err.message));
            res.send({code: "401"});
        }else{
            res.send({code: "202"});//event created
        }
    });
});
module.exports = router;

