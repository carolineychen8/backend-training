//https://www.w3schools.com/nodejs/nodejs_url.asp
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

  //use url module
  var q = url.parse(req.url, true);

  //read file
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); //write file content
    return res.end();
  });
}).listen(8080);