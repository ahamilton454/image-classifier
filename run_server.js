var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 2000;

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/:File', function(req,res){
    res.sendFile(__dirname + "/" + req.params.File);
});

io.on("connection", function (socket){
    socket.on("newConnection", function(){
        console.log("New Connection");
    });
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});