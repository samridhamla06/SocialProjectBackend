var mongoose = require('mongoose');
mongoose.Promise = global.Promise;//to have save() run :)
module.exports = mongoose.connect('mongodb://localhost/DWARE');//mongoose object