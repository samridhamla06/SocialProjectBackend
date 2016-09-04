var mongoose = require('../Model/mongoose.js');
var offerSchema = new mongoose.Schema({
    offer_desc:{type : String, required:true},
    event_start_date:{type:Date,required:true},
    event_end_date:{type:Date,required:true},
    image_URL:{type : String},
    insertedAt:{type:Date,default: Date.now()},
    updatedAt:{type:Date,default: Date.now()}
});

mongoose.exports = offerSchema;
