var http = require('http');
var port = 7070;

var server = http.createServer(function(req,resp){
        resp.writeHead(200, {"Content-Type": "text/html"});
        resp.end("<h1>Hello World</h1>");
}).listen(port, function(){
        console.log("Listening on:" + port);
});
