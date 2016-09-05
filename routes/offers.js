/**
 * Created by samridhamla06 on 04/09/16.
 */
var express = require('express');
var Offer = require('../Model/Offer.js');
var router = express.Router();

router.post('/', function (req, res){
    var newOffer = new Offer(req.body);
    newOffer.save(function(err){
        if (err){
            console.log("error is " + JSON.stringify(err));
            res.send({code: "401"});
        }else{
            res.send({code: "201"});//Offer created
        }
    });
});
module.exports = router;


