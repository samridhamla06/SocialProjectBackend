var mongoose = require(__dirname + '/mongoose.js');
var offerSchema = require ('../schemas/offerSchema.js')

var Offer = mongoose.model('Offer',offerSchema);

module.exports = Offer;