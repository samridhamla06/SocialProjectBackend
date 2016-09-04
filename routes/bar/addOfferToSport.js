var express = require('express');
var Bar = require('../../Model/Bar.js');
var Offer = require('../../Model/Offer.js');
var router = express.Router();

function populateOfferToBar(offerId, bar, callback) {
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
router.put('/:barId/:offerId', function (req, res) {
    var barId = req.params.barId;
    var offerId = req.params.offerId;
    Bar.findById(barId, function (err, bar) {
        if (err) {
            console.log("error is " + JSON.stringify(err));
            res.send({code: "401"});
        } else {
            populateOfferToBar(offerId, bar,function (err) {
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


