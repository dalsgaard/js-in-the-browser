var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var wss = new WebSocketServer({ port: 8340 });

wss.on('connection', function connection(ws) {
  console.log(ws.readyState);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  console.log(ws.protocol);
  ws.send('something');
  //ws.close(3408, 'WAT!');
});
