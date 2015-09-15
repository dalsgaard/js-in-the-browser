# JSON

```javascript
window.JSON
```

```javascript
self.JSON
```

## stringify

```javascript
var s = JSON.stringify({
  foo: 5,
  bar: 9
});
```

### Non standard

```javascript
var t = JSON.stringify('Text'); // -> "\"Text\""
var i = JSON.stringify(2); // -> "2"
var n = JSON.stringify(null); // -> "null"
var b = JSON.stringify(true); // -> "true"
```

## parse

```javascript
var o = JSON.parse('{ "foo": 5, "bar": 9 }');
```

### Non standard

```javascript
var t = JSON.parse('"Text"'); // -> "Text"
var i = JSON.parse('2'); // -> 2
var n = JSON.parse('null'); // -> null
var b = JSON.parse('true'); // -> true
```

## Links

- [Annotated ECMAScript 5.1](http://es5.github.io/#x15.12)
- [RFC 4627](http://www.ietf.org/rfc/rfc4627.txt)
- [Can I Use](http://caniuse.com/#feat=json)
