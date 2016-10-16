
var express = require('express');
var Bar = require('../Model/Bar.js');
var Event = require('../Model/Event.js');
var City = require('../Model/City.js');
var Offer = require('../Model/Offer.js');
var router = express.Router();


var addOffersToBar = function (offerId, bar, callback) {
    Offer.findById(offerId, {_id: 0}, function (err, offer) {
        if (err) {
            console.log("error is " + JSON.stringify(err));
            res.send({code: "402"});
        } else {
            //######  have to add condition when nothing found or offer is NULL  #######
            bar.offers.addToSet(offer);
            bar.updatedAt = Date.now();
            bar.save(callback);
        }
    });
}

router
    .get('/', function (req, res) {
        var cityId = req.query.cityId;
        var eventId = req.query.eventId;

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
    })
    .post('/', function (req, res) {
        var newBar = new Bar(req.body);
        newBar.save(function (err) {
            if (err) {
                console.log("error is " + JSON.stringify(err));
                res.send({code: "401"});
            } else {
                res.send({code: "201"});//bar created
            }
        });
    });


router
    .put('/offer', function (req, res) {
        var barId = req.query.barId;
        var offerId = req.query.offerId;
        Bar.findById(barId, function (err, bar) {
            if (err) {
                console.log("error is " + JSON.stringify(err));
                res.send({code: "401"});
            } else {
                addOffersToBar(offerId, bar, function (err) {
                    if (err) {
                        console.log("error is " + JSON.stringify(err));
                        res.send({code: "402"});
                    } else {
                        res.send({code: "205"});//offer added to Bar
                    }
                });
            }
        });
    });

module.exports = router;


