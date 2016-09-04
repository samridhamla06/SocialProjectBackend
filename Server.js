var app = require(__dirname + '/app.js');
var server = require('http').createServer(app);

server.listen(8000,function(err){
    console.log('Server is running at 8000 port')
});