var express = require('express');
var Bar = require('../../Model/Bar.js');
var Event = require('../../Model/Event.js');
var City = require('../../Model/City.js');
var router = express.Router();


var addEventToCity = function (cityId, eventId, callback) {
    City.findById(cityId, function (err, city) {
        if (err) {
            console.log("error is " + JSON.stringify(err.message));
            res.send({status: "404"});
        } else {
            city.events.addToSet(eventId);
            city.save(callback);
        }
    });
};

router.put('/:cityId/:eventId/:barId', function (req, res) {
    var cityId = req.params.cityId;
    var eventId = req.params.eventId;
    var barId = req.params.barId;

    console.log('received ids are '+ cityId + eventId + barId );

    Event.findById(eventId, function (err, event) {
        if (err) {
            console.log("error is " + JSON.stringify(err.message));
            res.send({code: "401"});
        } else {
            event.bars.addToSet(barId);
            event.updatedAt = Date.now();
            console.log('event updated to '+ JSON.stringify(event) );
            event.save(function (err) {
                if (err) {
                    console.log("error is " + JSON.stringify(err));
                    res.send({status: "402"});
                } else {
                    addEventToCity(cityId, eventId, function (err) {
                        if (err) {
                            console.log("error is " + JSON.stringify(err.message));
                            res.send({status: "403"});
                        } else {
                            res.send({status: "201"});
                        }

                    });
                }

            });

        }
    });
});
module.exports = router;


