/**
 * Created by samridhamla06 on 04/09/16.
 */
var mongoose = require(__dirname + '/mongoose.js');

var sportSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true},
    description: {type: String},
    rules: {type: String},
    image_URL: {type: String}
});

var Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;