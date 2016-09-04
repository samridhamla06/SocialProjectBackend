var express = require('express');
var City = require('../../Model/City.js');
var Event = require('../../Model/Event.js');
var router = express.Router();


router.get('/:cityId/:eventId', function (req, res) {
    var cityId = req.params.cityId;
    var eventId = req.params.eventId;

    Event.findById(eventId, {
        bars: 1,
        _id: 0
    }).populate('bars', null, {city: cityId}, {limit: 5}).populate('bars.offers').exec(function (err, event) {
        if (err) {
            console.log('Mongodb error' + JSON.stringify(err));
            res.send({code: "401"})
        } else {
            res.send(event.bars);
        }
    });
});

module.exports = router;