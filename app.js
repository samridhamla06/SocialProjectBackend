var express = require('express');
var app = express();
var cities = require(__dirname + '/routes/city/allCities.js');
var addCity = require(__dirname + '/routes/city/addCity.js');
var addBar = require(__dirname + '/routes/bar/addBar.js');
var allEvents = require(__dirname + '/routes/event/allEvents.js');
var allSports = require(__dirname + '/routes/sport/allSports.js');
var allEventsInACity = require(__dirname + '/routes/city/events.js');
var addEvent = require(__dirname + '/routes/event/addEvent.js');
var enrollToEvent = require(__dirname + '/routes/bar/enrollToEvent.js');
var barsForEvent = require(__dirname + '/routes/city/barsForEvent.js');
var addSport = require(__dirname + '/routes/sport/addSport.js');
var addOfferToSport = require(__dirname + '/routes/bar/addOfferToSport.js');
var addOffer = require(__dirname + '/routes/offer/addOffer.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());//post
app.use(bodyParser.urlencoded({extended: false}));//post
app.post('/*', function (req, res, next) {
    console.log('The request si ' +JSON.stringify(req.body));

    if (req.body == null) {
        res.send({status: "005"});//null body
    } else
        next();
});



app.use('/city/cities', cities);
app.use('/city/addCity', addCity);
app.use('/city/events', allEventsInACity);
app.use('/city/event/bars', barsForEvent);

app.use('/event/allEvents', allEvents);
app.use('/event/addEvent', addEvent);

app.use('/bar/event/enroll', enrollToEvent);
app.use('/bar/addBar', addBar);
app.use('/bar/offer', addOfferToSport);


app.use('/sport/addSport', addSport);
app.use('/sport/allSports', allSports);

app.use('/offer/addOffer', addOffer);

app.get('/', function (req, res) {
    res.send("Welcome to Hell Motherfucker");
});

module.exports = app;
