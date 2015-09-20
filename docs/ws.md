# ws

A node.js websocket implementation

## Installing

```
npm install ws -save
```

## WebSocketServer

```javascript
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
```

### Constructor

```javascript
var wss = new WebSocketServer({ port: 8340 });
```

### Connection event

The callback is called with an instance of WebSocket.

```javascript
wss.on('connection', function (ws) {
  // use ws
});
```

## WebSocket

### readyState

- CONNECTING (0)
- OPEN (1)
- CLOSING (2)
- CLOSED (3)

```javascript
WebSocket.DONE; // -> 2
ws.readyState === WebSocket.CONNECTING;
```

### send()

```javascript
ws.send(mesage);
```

#### Binary

```javascript
ws.send(mesage, { binary: true });
```

#### Callback

```javascript
ws.send(mesage, { binary: true }, function (err) {
  if (err) {
    // An error occured
  } else {
    // OK
  }
});
```
And without options.
```javascript
ws.send(mesage, function (err) {
  // ...
});
```

### close()

```javascript
ws.close();
```

And with a code and reason

```javascript
ws.close(3408, 'Foo');
```

### Events

_WebSocket_ emits the following events.

- message
- close

#### message

```javascript
ws.onmessage = function (e) {
  e.data // the message
  e.binary // boolean (non-standard)
};
```

#### close

```javascript
ws.onclose = function (e) {
  e.code // the code
  e.binary // the reason
};
```

## Links

- [ws: a node.js websocket implementation](http://einaros.github.io/ws/)
- [GitHub](https://github.com/websockets/ws)