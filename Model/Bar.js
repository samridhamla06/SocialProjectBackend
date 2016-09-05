/**
 * Created by samridhamla06 on 04/09/16.
 */
var mongoose = require(__dirname + '/mongoose.js');
var locationSchema = require('../schemas/location.js');
var offerSchema = require('../schemas/offerSchema.js');

var barSchema = new mongoose.Schema({
    name:{type : String, required:true,index:true},
    background_image_URL:{type:String},
    location:{type:locationSchema,required:true,index: '2dsphere'},
    offers:[offerSchema],
    city:{type : mongoose.Schema.Types.ObjectId,ref : 'City'},
    pincode:{type : String, required:true},
    landmark:{type : String},
    phone_number:[{type:String,required:true}],
    pintBeerCost:{type:Number},
    other_images_URL:[{type:String}],
    menu_images_URL:[{type:String}],
    insertedAt:{type:Date,default: Date.now()},
    updatedAt:{type:Date,default: Date.now()}
});

var Bar = mongoose.model('Bar',barSchema);

module.exports = Bar;