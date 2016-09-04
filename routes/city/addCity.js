/**
 * Created by samridhamla06 on 04/09/16.
 */
var express = require('express');
var City = require('../../Model/City.js');
var router = express.Router();


router.post('/', function (req, res){
    var newCity = new City(req.body);
    newCity.save(function(err){
        if (err){
            console.log("error is " + JSON.stringify(err));
            res.send({code: "401"});
        }else{
            res.send({code: "201"});//city created
        }
    });
});
module.exports = router;

