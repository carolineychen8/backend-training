//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  //read file
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); //use data from file
    return res.end();
  });

  //write file
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}).listen(8080);
