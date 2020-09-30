//modules
var http = require('http');
var dt = require('./timemodule');

//create server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime()); //write response to client
  res.end(); //end the response
}).listen(8080); //server object listens on port 800