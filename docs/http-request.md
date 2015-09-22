# HTTP Request

## XMLHttpRequest

### Constructor

```javascript
var req = new XMLHttpRequest();
```

### open()

```javascript
req.open('GET', '/foo');
```

#### Async or sync

An asynchronous request (default).

```javascript
req.open('GET', '/foo', true);
```

An synchronous request. 

```javascript
req.open('GET', '/foo', false);
```

#### Username and password

```javascript
req.open('GET', '/foo', true, 'bar', 'baz');
```

### send()

Sends the request. If an argument is given it is used at the body of the request. The argument must be of one of the following types:

- ArrayBufferView (e.g. Int8Array)
- Blob
- Document
- String
- FormData

```javascript
req.send(blob);
```

### setRequestHeader()

Sets the value of an HTTP request header. Must be called after _open_ but before _send_.

```javascript
req.setRequestHeader('Accept', 'application/json');
```

### abort()

Aborts the request.

```javascript
req.abort();
```

### timeout

Gets or sets the time (in milliseconds) before a timeout. If 0 a timeout will never occur (default).  

```javascript
req.timeout = 20000;
```

### readyState

Returns the state of the request.

```javascript
req.readyState;
```

The request can be in one of the following states.

- UNSENT (0)
- OPENED (1)
- HEADERS_RECEIVED (2)
- LOADING (3)
- DONE (4)

```javascript
XMLHttpRequest.DONE; // -> 2
req.readyState === XMLHttpRequest.LOADING;
```

### Events

_XMLHttpRequest_ inherits from _EventTarget_ and emits the following events.

- loadstart
- progress
- abort
- error
- load
- timeout
- loadend
- readystatechange

```javascript
req.addEventListener('loadend', function (e) {
  // ...
});
```

### responseType

Gets or sets the response type. Must be set before the call to _send_.

Valid values for _responseType are:

- "" (default)
- "arraybuffer"
- "blob"
- "document"
- "json"
- "text"

```javascript
req.responseType = 'arraybuffer';
```

### response

Returns the response body. The type is depending on the value of _responseType_.

```javascript
req.response;
```

### status

Returns the HTTP status code.

```javascript
req.status;
```

### statusText

Returns the HTTP status code text.

```javascript
req.statusText;
```

### getResponseHeader()

Returns the value for a given response header, or null if the header has no value.

```javascript
req.getResponseHeader('last-modified');
```

### getAllResponseHeaders()

Returns all the response headers as a string.

```javascript
req.getAllResponseHeaders();
```

## Links

- [XMLHttpRequest](https://xhr.spec.whatwg.org/)
- [Can I Use](http://caniuse.com/#feat=xhr2)
