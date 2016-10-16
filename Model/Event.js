var mongoose = require(__dirname + '/mongoose.js');
var locationSchema = require('../schemas/location.js');

var eventSchema = new mongoose.Schema({
    event_desc: {type: String, required: true},
    event_start_date: {type: Date, required: true},
    country: {type: String, required: true},
    location: {type: locationSchema, index: '2dsphere'},
    venue: {type: String, required: true},
    team1:{type:String,required:true},
    team2:{type:String,required:true},
    sport: {type: mongoose.Schema.Types.ObjectId, ref: 'Bar', required: true, index: true},
    bars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bar'}],
    insertedAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;