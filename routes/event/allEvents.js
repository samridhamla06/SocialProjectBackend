/**
 * Created by samridhamla06 on 04/09/16.
 */
var express = require('express');
var Event = require('../../Model/Event.js');
var router = express.Router();


router.get('/', function (req, res) {
    Event.find({},function(err,events){
        if (err){
            console.log('Mongodb error');
            res.send({code:"401",reason:"Couldn't connect to Mongodb"})
        }else{
            res.send(events);
        }
    });
});
module.exports = router;

