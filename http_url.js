var http = require('http');

//create server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); //write part of url after domain name
  res.end();
}).listen(8080);