var express = require('express');
var City = require('../../Model/City.js');
var router = express.Router();


router.get('/:cityId', function (req, res) {
    var cityId = req.params.cityId;
    City.findById(cityId,function(err,city){
        if (err){
            console.log('Mongodb error');
            res.send({code:"401",reason:"Couldn't connect to Mongodb"})
        }else{
            res.send(city.events);//all allEventsInACity in that city
        }
    });
});
module.exports = router;

