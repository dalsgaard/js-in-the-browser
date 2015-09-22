# Events

## EventTarget

### addEventListener()

Add an event listener for a given event. The method takes up to three arguments - a name of the event, a callback, and an optional _capture_ flag telling whether or not to apply this listener in the _capture phase_ (defaults to _false_). The callback will be called with an _Event_ object.

```javascript
target.addEventListener('click', function () {
  // ...
});
```
```javascript
var callback = function (event) {
  // ...
};
target.addEventListener('click', callback, true);
```


### removeEventListener()

Removes an event listener that is registered for a given name, callback and capture flag (defaults to _false_).

```javascript
target.removeEventListener('click', callback, true);
```


## Event

### type

Returns a string indicating the type of the event.

```javascript
target.addEventListener('click', function (event) {
  event.type; // -> "click"
});
```

### target

Returns the object that dispatched the event.

```javascript
event.target;
```

### currentTarget

The current target.

```javascript
target.addEventListener('click', function (event) {
  event.currentTarget; // -> target
});
```

---

### eventPhase

The current event phase. Can be one of the following values.

- NONE (0)
- CAPTURING_PHASE (1)
- AT_TARGET (2)
- BUBBLING_PHASE (3)

```javascript
event.eventPhase === Event.CAPTURING_PHASE;
```

---

### stopPropagation()

Stops the event from propagating to another _currentTarget_.

```javascript
event.stopPropagation();
```

### stopImmediatePropagation()

Prevents other listeners of the same event from being called.

```javascript
event.stopImmediatePropagation();
```

---

### bubbles

Returns whether the event can bubble.

```javascript
event.bubbles;
```

### cancelable

Returns whether the default behaviour can be prevented.

```javascript
event.cancelable;
```

### preventDefault()

Prevent the default behaviour.

```javascript
event.preventDefault();
```

### defaultPrevented

Whether or not _preventDefault_ was called.

```javascript
event.defaultPrevented;
```


## Links

- [DOM Living Standard - EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)
- [DOM Living Standard - Event](https://dom.spec.whatwg.org/#interface-event)
