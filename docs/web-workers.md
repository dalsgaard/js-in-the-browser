# Web Workers API

## Worker

### Constructor

The constructor takes a single argument - the url to a script to execute in the worker thread. 

```javascript
var worker = new Worker('worker.js');
```

### postMessage()

Post a message to the worker. The message may be any value or JavaScript object handled by the structured clone algorithm.

```javascript
worker.postMessage({ foo: 42 });
worker.postMessage(blob);
```

### terminate()

Terminates the Worker.

```javascript
worker.terminate();
```

### Events

_Worker_ inherits from _EventTarget_ and emits the following events.

- error
- message

```javascript
worker.addEventListener('message', function (e) {
  // ...
});
```

#### MessageEvent

The _message event_ callback retrieves a _MessageEvent_ instance when invoked. The event has a data property where the actual message is stored.

```javascript
worker.addEventListener('message', function (e) {
  e.data; // The message
});
```

## The Worker Script

### self

The variable _self_ is the global scope inside a worker. _self_ implements the _DedicatedWorkerGlobalScope_ interface.

### postMessage()

Post a message back to the owner. The message may be any value or JavaScript object handled by the structured clone algorithm.

```javascript
self.postMessage({ foo: 42 });
self.postMessage(blob);
```

### close()

Closes the worker.

```javascript
self.close();
```

### Events

_DedicatedWorkerGlobalScope_ inherits from _EventTarget_ and emits the following events.

- error
- message

```javascript
self.addEventListener('message', function (e) {
  e.data; // The message
});
```

### importScripts()

Imports scripts into the worker. The scripts is imported synchronously.

```javascript
self.importScripts('foo.js');
```

### APIs

There are no DOM access from inside the worker, but there are many other APIs - among others:

- WebSockets
- Worker
- XMLHttpRequest


## Links

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/workers.html)
- [Structured Clone Algorithm](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data)
- [Can I Use](http://caniuse.com/#feat=webworkers)

