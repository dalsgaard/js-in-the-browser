# History API

## History

```javascript
window.history;
```

### length

The length of the history list.

```javascript
history.length;
```

### go()

Moves a given number of pages (negative number moves backwards).

```javascript
history.go(2);
history.go(-3);
```

### back()

Moves one page back (same as `go(-1)`)

```javascript
history.back();
```

### forward

Moves one page forward (same as `go(1)`)

```javascript
history.forward();
```

### pushState()

Shifts the url and place the new url on the history list. This is done without changing the actual page. This method takes two or three arguments - a state object, a name (currently ignored by all browsers), and optionally a new url (must be same origin).

```javascript
history.pushState({ foo: 42 }, '', '/foo');
```

### replaceState()

Shifts the url and replace the new url with the current url in the history list. This is done without changing the actual page. This method takes two or three arguments - a state object, a name (currently ignored by all browsers), and optionally a new url (must be same origin).

```javascript
history.replaceState({ foo: 42 }, '', '/foo');
```

## Events

### popstate

```javascript
window.addEventListener('popstate', function (e) {
  // ...
});
```
### hashchange

```javascript
window.addEventListener('hashchange', function (e) {
  // ...
});
```

#### HashChangeEvent

```javascript
window.addEventListener('hashchange', function (e) {
  e.newURL;
  e.oldURL;
});
```

## Location

```javascript
window.location;
```

### href

Gets or sets the current url as a string.

```javascript
location.href;
location.href = 'foo';
location.href = 'http://foo.bar/baz';
```


## Links

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/browsers.html)
- [Can I Use](http://caniuse.com/#feat=history)
- [Can I Use](http://caniuse.com/#feat=hashchange)
