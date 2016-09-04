var mongoose = require(__dirname + '/mongoose.js');
var locationSchema = require('../Schemas/location.js');
var citySchema = new mongoose.Schema({
    name:{type : String, required:true,unique:true,index:true},
    country:{type:String,required:true},
    location:{type:locationSchema,index: '2dsphere'},
    events:[{type : mongoose.Schema.Types.ObjectId,ref : 'Event'}],
    insertedAt:{type:Date,default: Date.now()},
    updatedAt:{type:Date,default: Date.now()}
});


var City = mongoose.model('City',citySchema);
module.exports = City;