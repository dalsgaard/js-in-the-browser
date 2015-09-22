# Elements

## Element

```javascript
var body = window.document.body;
```

```javascript
var div = document.createElement('div');
```

---

### tagName

Returns the name of the element's tag (in uppercase). 

```javascript
body.tagName // -> "BODY"
```

---

### id

Gets or sets the element's id attribute.

```javascript
body.id = 'foo';
body.id // -> "foo"
```

### className

Gets or sets the value of the element's class attribute.

``` javascript
body.className = 'foo bar';
body.className; // -> "foo bar"
```

### classList

Returns the element's class attribute as a _DOMTokenList_.

``` javascript
body.classList.add('foo');
```

### name

Gets or sets the element's _name_ attribute. Only applies to the following elements: _a_, _applet_, _button_, _form_, _frame_, _iframe_, _img_, _input_, _map_, _meta_, _object_, _param_, _select_, and _textarea_.

```
body.firstElementChild.name = 'foo'
body.firstElementChild.name // -> "foo"
```

---

### hasAttributes()

Returns a boolean value indicating if the element has any attributes or not.

```javascript
body.hasAttributes();
```

### attributes

Returns the element's attributes as a _NamedNodeMap_.

```javascript
body.attributes;
```

### getAttribute(name)

Returns the value of the attribute by a given name on the element, where _name_ is the attribute name. If no attribute by that name is found _null_ is returned.

```javascript
body.getAttribute('lang');
```

### setAttribute(name, value)

Adds a new attribute or changes the value of an existing attribute on the element, where the parameter 'name' is the name of the attribute, and the parameter 'value' is the value.

```javascript
body.setAttribute('lang', 'en');
```

### removeAttribute(name)

Removes an attribute from the element, where _name_ is the name of the attribute to be removed.

```javascript
body.removeAttribute('lang');
```

### hasAttribute(name)

Returns a boolean value indicating whether the element has the specified attribute or not, where the parameter _name_ is the name of the attribute.

```javascript
body.hasAttribute('lang');
```

---

### getAttributeNode(name)

Returns the value of the attribute by a given name on the element as an _Attr_ node, where _name_ is the attribute name. If no attribute by that name is found null is returned.

```javascript
body.getAttributeNode('lang');
```

### setAttributeNode(node)

Adds a new _Attr_ node to the element.

```javascript
body.setAttributeNode(document.createAttribute('foo'));
```

### removeAttributeNode(attr)

Removes an attribute from the element, where _attr_ is the attribute node to be removed.

```javascript
body.removeAttributeNode(body.getAttributeNode('lang'));
```

---

### getElementsByClassName(names)

Returns a list (_HTMLCollection_) of nodes of type _Element_ that is contained inside this element and has class names corresponding to the parameter _names_, where _names_ is at white space separated list of names.

```javascript
body.getElementsByClassName('foo');
body.getElementsByClassName('bar baz');
``` 

### getElementsByTagName(name)

Returns a list (_HTMLCollection_) of nodes of type _Element_ that is contained inside this element and has tag name corresponding to the parameter _name_.

```javascript
body.getElementsByTagName('div');
``` 


## Attr

```javascript
var attr = document.createAttribute('lang');
```

### name

Returns the name of the attribute.

```javascript
attr.name; // -> "lang"
```

### value

Gets or sets the value of the attribute.

```javascript
attr.value = 'en';
attr.value; // -> "en"
```

### ownerElement

Returns the element that owns the attribute, or null if it is unattached.

```javascript
attr.ownerElement;
```


## Element (DOM Parsing and Serialization)

Extension to _Element_ from the DOM Parsing and Serialization specification.

### innerHTML

Gets or sets the element's HTML content as a string.

```javascript
body.innerHTML = '<h1>Foo</h1>';
body.innerHTML; // -> "<h1>Foo</h1>"
```

### outerHTML

Gets or sets the element's HTML content as a string, including the element itself. When outerHTML is set, the original element is removed from the document.

```javascript
body.firstElementChild.outerHTML;
body.firstElementChild.outerHTML = '<p>Foo</p>';
```

### insertAdjacentHTML(position, text)

Parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position, where the parameter _position_ is the position and _text_ is the text. The position can be one of the following:

- 'beforebegin' - Before the element itself.
- 'afterbegin' - Just inside the element, before its first child.
- 'beforeend' - Just inside the element, after its last child.
- 'afterend' - After the element itself.

```javascript
body.insertAdjacentHTML('afterbegin', '<p>Foo</p>');
body.firstElementChild.insertAdjacentHTML('afterend', '<p>Foo</p>');
```


## Links

- [DOM Living Standard - Element](https://dom.spec.whatwg.org/#element)
- [DOM Living Standard - Attr](https://dom.spec.whatwg.org/#attr)
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/)