var express = require('express');
var router = express.Router();
var request = require('request');

router
    .post('/register', function (req, res) {
        // TODO: save in the database this token
    });

router
    .post('/send', function (req, res) {
        var notification = req.params.notification;
        var deviceIds = req.params.deviceIds;
        sendDataToDevices(deviceIds, notification);
    });

function sendDataToDevices(device_id, notification, callback) {

    var options = {
        uri: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        body: {
            "notification": notification,
            "to": device_id
        },
        headers: {
            'Content-Type': application / json,
            'Authorization': 'key=AIzaSyA1QjqWhz5ZDliEuAmebAp9pqIwZ9gfX8E'
        }
    };
    var res = '';

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });
}




