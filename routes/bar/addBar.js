/**
 * Created by samridhamla06 on 04/09/16.
 */
var express = require('express');
var Bar = require('../../Model/Bar.js');
var router = express.Router();

router.post('/', function (req, res){
    var newBar = new Bar(req.body);
    newBar.save(function(err){
        if (err){
            console.log("error is " + JSON.stringify(err));
            res.send({code: "401"});
        }else{
            res.send({code: "201"});//bar created
        }
    });
});
module.exports = router;


