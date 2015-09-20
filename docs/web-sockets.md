# Web Sockets

## WebSocket

### Constructor

The constructor takes a mandatory URL.

```javascript
var ws = new WebSocket("ws://localhost:8340");
```

#### Protocol

It is also possible to give a protocol as a second parameter.

```javascript
var ws = new WebSocket("ws://localhost:8340", 'foo');
```

### Events

_WebSocket_ inherits from _EventTarget_ and emits the following events.

- open
- message
- error
- close

#### open

```javascript
ws.addEventListener('open', function (e) {
  // ...
});
```

#### message

The actual message can be read from the events data property.

```javascript
ws.addEventListener('message', function (e) {
  e.data; // The message
});
```

#### error

```javascript
ws.addEventListener('error', function (e) {
  // ...
});
```

#### close

```javascript
ws.addEventListener('close', function (e) {
  e.code;
  e.reason;
});
```

##### code

- 1000: Normal closure.
- 1001: The endpoint is going away.
- 1002: Protocol error.
- 1003: Unsupported data.
- 1004: Frame too large.
- 1005: No status.
- 1006: Closed abnormally.
- 3000 - 3999: Available for libraries.
- 4000 - 4999: Available for applications.

### send()

Sends a message to the server. This method takes a single parameter - the message to send. The message can be one of the following types.

- String
- Blob
- ArrayBuffer
- ArrayBufferView

### close()

Closes the connection. A code and a reason has to be supplied.

```javascript
ws.close(3408, 'WAT!');
```

### readyState

- CONNECTING (0)
- OPEN (1)
- CLOSING (2)
- CLOSED (3)

```javascript
WebSocket.DONE; // -> 2
ws.readyState === WebSocket.CONNECTING;
```

### binaryType

- 'blob'
- 'arraybuffer'


## Links

- [The WebSocket API](http://www.w3.org/TR/websockets/)
- [WebSocket.org](http://www.websocket.org/)
- [Can I Use](http://caniuse.com/#feat=websockets)