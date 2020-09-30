//https://www.w3schools.com/nodejs/nodejs_npm.asp
var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!  ")); //writes hello world in all uppercase letters
  res.write(uc.upperCase("This is some new text")); 
  res.end();
}).listen(8080);