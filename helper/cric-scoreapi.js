/**
 * Created by imittal on 9/18/16.
 */
var wget = require("request");


exports.cricketMatches = function(callback) {
    wget('http://cricscore-api.appspot.com/csa', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);// Print the google web page.
        }
    })
};

exports.cricketScores = function(id, callback) {
    var propertiesObject = { id: id };
    wget({
        url: "http://cricscore-api.appspot.com/csa",
        qs: propertiesObject
    }, function(err, resp, body) {
        callback(body);
    });
};

