# Base64

In the main window.

```javascript
> window.atob
> window.btoa
```

In a _Web Worker_.

```javascript
> self.atob
> self.btoa
```

### btoa

Base64 encoding.

```javascript
var b = btoa('Foo/Bar') // -> "Rm9vL0Jhcg=="
```

Base64 decoding.

### atob

```javascript
var a = atob('Rm9vL0Jhcg==') // -> "Foo/Bar"
```

## Links

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/webappapis.html#atob)
- [RFC 4648](https://tools.ietf.org/html/rfc4648)
- [Can I Use](http://caniuse.com/#feat=atob-btoa)
