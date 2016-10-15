/**
 * Created by imittal on 9/18/16.
 */
var cricapi = require("../helper/cric-api.js");
var express = require('express');
var router = express.Router();

router.get('/match', function (req, res) {
        cricapi.cricketMatches(function (databundle) {
            var matches = JSON.parse(databundle).data;
            res.send(matches);
        });
    });

router.get('/score', function (req, res) {
    var matchId = req.query.matchId;
    cricapi.cricketScores(matchId, function (_score) {
        var score = JSON.parse(_score, null, 2);
        res.send(score);
    });
});

router.get('/ballbyball', function (req, res) {
    var matchId = req.query.matchId;
    cricapi.ballByBall(matchId, function (_bbb) {
        var bbb = JSON.parse(_bbb, null, 2);
        res.send(bbb);
    });
});

module.exports = router;