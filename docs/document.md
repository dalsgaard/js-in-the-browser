# Document

## Document

```javascript
window.document;
```

### URL

Document URL.

```javascript
document.URL;
```

### documentURI

Document URL.

```javascript
document.documentURI;
```

### origin

Returns the _origin_ part of the URL.

```javascript
document.origin;
```

### characterSet

Returns the character set of the document.

```javascript
document.characterSet;
```

---

### doctype

Returns the doctype for the document.

```javascript
document.doctype;
```

### documentElement

Returns the root element for the document.

```javascript
document.documentElement;
```

---


### getElementsByClassName(names)

Returns a list (_HTMLCollection_) of nodes of type _Element_ that is contained inside the document and has class names corresponding to the parameter _names_, where _names_ is at white space separated list of names.

```javascript
document.getElementsByClassName('foo');
document.getElementsByClassName('bar baz');
``` 

### getElementsByTagName(name)

Returns a list (_HTMLCollection_) of nodes of type _Element_ that is contained inside the document and has tag name corresponding to the parameter _name_.

```javascript
document.getElementsByTagName('div');
``` 

---

### createElement(name)

Creates an _Element_ with the given _name_.

```javascript
var div = document.createElement('div');
```

### createTextNode(content)

Creates a _Text_ node with the given _content_.

```javascript
var text = document.createTextNode('Foo/Bar/Baz');
```

### createAttribute(name)

Creates an _Attr_ object with the given _name_.

```javascript
var attr = document.createAttribute('lang');
```

---

### DOMContentLoaded

The document emits the 'DOMContentLoaded' event. It fired when the document has been completely loaded and parsed, without waiting for stylesheets, and images to finish loading.

```javascript
document.addEventListener('DOMContentLoaded', function (event) {
  // ...
});
```

## NonElementParentNode

Implemented by _Document_, and _DocumentFragment_.

### getElementById(id)

Returns the first _Element_ that matches the given _id_.

```javascript
var foo = document.getElementById('foo');
  // ...
});
```


## Links

- [DOM Living Standard](https://dom.spec.whatwg.org/#document)