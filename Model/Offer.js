var mongoose = require(__dirname + '/mongoose.js');
var offerSchema = require ('../Schemas/offerSchema.js')
var Offer = mongoose.model('Offer',offerSchema);
module.exports = Offer;