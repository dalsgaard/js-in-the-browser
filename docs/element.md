# Elements

## Element

```javascript
var div = document.createElement('div');
```

```javascript
var body = window.document.body;
```


### attributes

Returns the element's attributes as a NamedNodeMap.

```
> body.attributes
```

### classList

Returns the element's class attribute as a DOMTokenList.

```
> body.classList.add('foo')
```

### className

Gets and sets the value of the element's class attribute.

```
> body.className
```

### id

Gets or sets the element's id attribute.

```
> body.id = 'foo'
> body.id // -> "foo"
```

### innerHTML

Gets or sets the element's HTML content as a string.

```
> body.innerHTML = '<h1>Foo</h1>'
> body.innerHTML // -> "<h1>Foo</h1>"
```

### name

Gets or sets the element's name attribute. Only applies to the following elements: a, applet, button, form, frame, iframe, img, input, map, meta, object, param, select, and textarea.

```
body.firstElementChild.name = 'foo'
body.firstElementChild.name // -> "foo"
```

### outerHTML

Gets or sets the element's HTML content as a string, including the element itself. When outerHTML is set, the original element is removed from the document.

```
> body.firstElementChild.outerHTML
> body.firstElementChild.outerHTML = '<p>Foo</p>'
```

### tagName

Returns the name of the element's tag (in uppercase). 

```
> body.tagName // -> "BODY"
```

## Methods

### getAttribute(name)

Returns the value of the attribute by a given name on the element, where 'name' is the attribute name. If no attribute by that name is found null is returned.

```
> body.getAttribute('lang')
```

### getAttributeNS(namespace, name)

Returns the value of the attribute by a given name in a given namespace on the element, where 'namespace' is the namespace and 'name' is the attribute name. If no attribute by that name in that namespace is found null is returned.

```
> body.firstElementChild.getAttributeNS('http://foo.bar/2015/baz', 'foo')
```

### getAttributeNode(name)

Returns the value of the attribute by a given name on the element as an Attr node, where 'name' is the attribute name. If no attribute by that name is found null is returned.

```
> body.getAttributeNode('lang')
```

### getAttributeNodeNS(namespace, name)

Returns the value of the attribute by a given name in a given namespace on the element as an Attr node, where 'namespace' is the namespace and 'name' is the attribute name. If no attribute by that name in that namespace is found null is returned.

```
> body.firstElementChild.getAttributeNodeNS('http://foo.bar/2015/baz', 'foo')
```

### getElementsByClassName(names)

Returns a list (HTMLCollection) of nodes of type Element that is contained inside this element and has class names corresponding to the parameter 'names', where 'names' is at white space separated list of names.

```
> body.getElementsByClassName('foo')
> body.getElementsByClassName('bar baz')
``` 

### getElementsByTagName(name)

Returns a list (HTMLCollection) of nodes of type Element that is contained inside this element and has tag name corresponding to the parameter 'name'.

```
> body.getElementsByTagName('div')
``` 

### getElementsByTagNameNS(namespace, name)

Returns a list (HTMLCollection) of nodes of type Element that is contained inside this element and has tag name corresponding to the parameter 'name' and belongs to the namespace corresponding to the parameter 'namespace'.

```
> body.getElementsByTagNameNS('http://foo.bar/2015/baz', 'foo')
``` 

### hasAttribute(name)

Returns a boolean value indicating whether the element has the specified attribute or not, where the parameter 'name' is the name of the attribute.

```
> body.hasAttribute('lang')
```

### hasAttributeNS(namespace, name)

Returns a boolean value indicating whether the element has the specified attribute or not, where the parameter 'name' is the name of the attribute and the parameter 'namespace' is the namespace of the attribute.

```
> body.hasAttribute('http://foo.bar/2015/baz', 'foo')
```

### hasAttributes()

Returns a boolean value indicating if the element has any attributes or not.

```
> body.hasAttributes()
```

### insertAdjacentHTML(position, text)

Parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position, where the parameter 'position' is the position and 'text' is the text. The position can be one of the following:

- 'beforebegin' - Before the element itself.
- 'afterbegin' - Just inside the element, before its first child.
- 'beforeend' - Just inside the element, after its last child.
- 'afterend' - After the element itself.

```
> body.insertAdjacentHTML('afterbegin', '<p>Foo</p>')
> body.firstElementChild.insertAdjacentHTML('afterend', '<p>Foo</p>')
```

### removeAttribute(name)

Removes a attribute from the element, where 'name' is the name of the attribute to be removed.

```
> body.removeAttribute('lang')
```

### removeAttributeNode(node)

Removes a attribute from the element, where 'node' is the attribute node to be removed.

```
> body.removeAttributeNode(body.getAttributeNode('lang'))
```

### removeAttributeNS(namespace, name)

Removes a attribute from the element, where 'name' and 'namespace' is the name and namespace of the attribute to be removed.

```
> body.removeAttributeNS('http://foo.bar/2015/baz', 'foo')
```

### setAttribute(name, value)

Adds a new attribute or changes the value of an existing attribute on the element, where the parameter 'name' is the name of the attribute, and the parameter 'value' is the value.

```
> body.setAttribute('lang', 'en')
```

### setAttributeNode(node)

Adds a new Attr node to the element.

```
> body.setAttributeNode(document.createAttribute('foo'))
```

### setAttributeNS(namespace, name, value)

Adds a new attribute or changes the value of an existing attribute on the element, where the parameters 'namespace' and 'name' is the namespace and name of the attribute, and the parameter 'value' is the value.

```
> body.setAttribute('http://foo.bar/2015/baz', 'foo', 'bar')
```

## CSSOM Properties

### clientHeight

Returns the element's inner height in pixels (integer), including padding but not the horizontal scrollbar height, border, or margin.

```
> body.clientHeight
```

### clientLeft

Returns the element's left border width in pixels (integer), including the width of a left vertical scrollbar if any.

```
> body.clientLeft
```

### clientTop

Returns the element's top border width in pixels (integer).

```
> body.clientTop
```

### clientWidth

Returns the element's inner width in pixels (integer), including padding but not the vertical scrollbar width, border, or margin.

```
> body.clientWidth
```

### scrollHeight

Returns the element's content height, including content not visible on the screen due to overflow.

```
> body.scrollHeight
```

### scrollLeft

Gets or sets the number of pixels the element's content is scrolled to the left.

```
> body.scrollLeft
```

### scrollTop

Gets or sets the number of pixels the element's content is scrolled upward.

```
> body.scrollTop
```

### scrollWidth

Returns the element's content width, including content not visible on the screen due to overflow.

```
> body.scrollWidth
```

## CSSOM Methods

### getBoundingClientRect()

Returns the element's size (border-box) and its position relative to the viewport as an DOMRect.

```
> body.firstElementChild.getBoundingClientRect()
```

### getClientRects()

Returns a collection of rectangles that indicate the bounding rectangles for each box in the element.

```
> body.firstElementChild.getClientRects()
```

### scrollIntoView(align)

Scrolls the element into the visible area of the browser window. If the 'align' parameter is true, the top of the element will be aligned to the top of the visible area of the scrollable ancestor. If false, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. Default is to align to the top.

```
> body.firstElementChild.scrollIntoView(false)
> body.firstElementChild.scrollIntoView()
```

## DOMRect

### bottom

### height

### left

### right

### top

### width