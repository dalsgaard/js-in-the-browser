var http = require('http');

function handler(req, res){
  res.end('It Works!! Path Hit: ' + req.url + '\n');
}

var server = http.createServer(handler);

const PORT = 8340;

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});