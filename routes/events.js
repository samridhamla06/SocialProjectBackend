/**
 * Created by samridhamla06 on 04/09/16.
 */
var express = require('express');
var Event = require('../Model/Event.js');
var router = express.Router();
var City = require('../Model/City.js');

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

router
    .post('/', function (req, res) {
        var newEvent = new Event(req.body);
        newEvent.save(function (err) {
            if (err) {
                console.log("error is " + JSON.stringify(err.message));
                res.send({code: "401"});
            } else {
                res.send({code: "202"});//event created
            }
        });
    })
    .get('/', function (req, res) {
        Event.find({}, function (err, events) {
            if (err) {
                console.log('Mongodb error');
                res.send({code: "401", reason: "Couldn't connect to Mongodb"})
            } else {
                res.send(events);
            }
        });
    });

router
    .get('/city/:cityId', function (req, res) {
        var cityId = req.params.cityId;

        City.findById(cityId, {events: 1, _id: 0}).populate('events').exec(function (err, result) {
            //projection not really required..but just less overload
            if (err) {
                console.log('Mongodb error');
                res.send({code: "401", reason: "Couldn't connect to Mongodb"})
            } else {
                res.send(result.events);//all allEventsInACity in that city
            }
        })
    });

router
    .post('/enrollbar', function (req, res) {
        // TODO: I changed here from put to post and to query paramters than normal paramaters since 
        // TODO : the user will get confused which one to send first
        var cityId = req.query.cityId;
        var eventId = req.query.eventId;
        var barId = req.query.barId;

        console.log('received ids are ' + cityId + eventId + barId);

        Event.findById(eventId, function (err, event) {
            if (err) {
                console.log("error is " + JSON.stringify(err.message));
                res.send({code: "401"});
            } else {
                event.bars.addToSet(barId);
                event.updatedAt = Date.now();
                console.log('event updated to ' + JSON.stringify(event));
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

