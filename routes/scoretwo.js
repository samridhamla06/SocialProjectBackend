/**
 * Created by imittal on 9/18/16.
 */
var cricapi = require("../helper/cric-scoreapi.js");
var express = require('express');
var router = express.Router();

router
    .get('/match', function (req, res) {
        cricapi.cricketMatches(function (databundle) {
            res.send(databundle);
        });

    });


router.get('/score', function (req, res) {
    var matchId = req.query.matchId;
    cricapi.cricketScores(matchId, function (_score) {
        res.send(_score);
    });
});


module.exports = router;