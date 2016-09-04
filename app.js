var express = require('express');
var app = express();
var cities = require(__dirname + '/routes/city/allCities.js');
var addCity = require(__dirname + '/routes/city/addCity.js');
var addBar = require(__dirname + '/routes/bar/addBar.js');
var allEventsInACity = require(__dirname + '/routes/city/events.js');
var addEvent = require(__dirname + '/routes/event/addEvent.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());//post
app.use(bodyParser.urlencoded({extended: false}));//post
app.post('/*', function (req, res, next) {
    if (!req.body) {
        res.send({status: "005"});//null body
    } else
        next();
});

app.use('/city/cities', cities);
app.use('/city/addCity', addCity);
app.use('/city/events', allEventsInACity);
app.use('/event/addEvent', addEvent);
app.use('/bar/addBar', addBar);


app.get('/', function (req, res) {
    res.send("Welcome to Hell Motherfucker");
});

module.exports = app;
