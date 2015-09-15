# Base64

```javascript
> window.atob
> window.btoa
```

```javascript
> self.atob
> self.btoa
```

## btoa

```javascript
var b = btoa('Foo/Bar') // -> "Rm9vL0Jhcg=="
```

## atob

```javascript
var a = atob('Rm9vL0Jhcg==') // -> "Foo/Bar"
```

## Links

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/webappapis.html#atob)
- [RFC 4648](https://tools.ietf.org/html/rfc4648)
- [Can I Use](http://caniuse.com/#feat=atob-btoa)
