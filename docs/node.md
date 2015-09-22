# Node Tree

```javascript
var doc = window.document;
var body = window.document.body;
```

## Node

_Node_ is an abstract interface.

```javascript
doc instanceof Node; // -> true
body instanceof Node; // -> true
```

### nodeName

Returns the node's name.

```javascript
doc.nodeName; // -> "#document"
body.nodeName; // -> "body"
```

### nodeType

Returns an integer value specifing the type of the node.

Possible values are:

- Node.ELEMENT\_NODE (1)
- Node.TEXT\_NODE (3)
- Node.PROCESSING\_INSTRUCTION\_NODE (7)
- Node.COMMENT\_NODE (8)
- Node.DOCUMENT\_NODE (9)
- Node.DOCUMENT\_TYPE\_NODE (10)
- Node.DOCUMENT\_FRAGMENT\_NODE (11)

```javascript
body.nodeType; // -> 1
```

---

### baseURI

Returns the URL of the document.

```javascript
body.baseURI;
```

---

### ownerDocument

Returns the document wherein the node exists.

```javascript
body.ownerDocument
```

### parentNode

Returns the node's parent node.

```javascript
body.parentNode
```

---

### hasChildNodes()

Returns a boolean value indicating whether the node has child nodes or not.

```javascript
body.hasChildNodes();
```

### childNodes

Returns the node's children as a NodeList.

```javascript
doc.childNodes;
body.childNodes;
```

### firstChild

Returns the node's first child node.

```javascript
doc.firstChild;
```

### lastChild
	
Returns the node's last child node.

```javascript
doc.firstChild;
```

### previousSibling

Returns the node's previous sibling (the node before this node in the parents childNodes).

```javascript
doc.lastChild.previousSibling;
```

### nextSibling

Returns the node's next sibling (the node after this node in the parents childNodes).

```javascript
doc.firstChild.nextSibling;
```

---

### localName

Returns the node's local tag name, or null if there is no tag name.

```javascript
body.localName; // -> "body"
doc.localName; // -> null
```

### prefix

Returns the node's namespace prefix, or null if there is none.

```javascript
body.prefix; // -> null
```

---

### nodeValue

Returns the node's value as a string, or null if it has no value.

```javascript
body.nodeValue; // -> null
body.firstChild.nodeValue;
```

### textContent

Gets or sets the node's content as text (a string), or null if the node is a document, a document type, or a notation.

```javascript
doc.textContent; // -> null
body.textContent;
```

### normalize()

Puts the node and all of its sub-tree into a _normalized_ form. In a _normalized_ form, no text nodes are empty and there are no adjacent text nodes.

```
body.normalize();
```

---

### cloneNode(deep)

Returns a duplicate of the node. If _deep_ is true, children of the node will also be cloned (deep copy). Default is false (shallow copy), which results in a clone without children.

```javascript
var clone = body.firstChild.cloneNode(true);
body.appendChild(clone);
```

### isEqualNode(other)

Returns a boolean value indicating whether the node is identical to another node, where _other_ is the other node.

Two nodes are identical iff:

- The two nodes are of the same type.
- The following properties are equal: nodeName, localName, namespaceURI, prefix, nodeValue.
- The attributes are equal.
- The children are equal.

```javascript
body.firstChild.isEqualNode(body.lastChild);
```

---

### compareDocumentPosition(other)

This method compares the position of the node against another node. 

The result is a bitmask with the following values:

- Node.DOCUMENT\_POSITION\_DISCONNECTED (1)
- Node.DOCUMENT\_POSITION\_PRECEDING (2)
- Node.DOCUMENT\_POSITION\_FOLLOWING (4)
- Node.DOCUMENT\_POSITION\_CONTAINS (8)
- Node.DOCUMENT\_POSITION\_CONTAINED\_BY (16)
- Node.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC (32)

```javascript
body.firstChild.compareDocumentPosition(body.lastChild); // -> 4
body.compareDocumentPosition(body.lastChild); // -> 20
body.compareDocumentPosition(body.lastChild) & Node.DOCUMENT_POSITION_CONTAINED_BY; // -> 16
```

### contains(other)

Returns a boolean value indicating whether this node contains _other_ node.

```javascript
body.contains(body.lastChild); // -> true
```

---

### lookupPrefix(namespace)

Returns the node's prefix for a given namespace URI, or _null_ if none found.

```javascript
svg.lookupPrefix('http://www.w3.org/1999/xlink');
```

### lookupNamespaceURI(prefix)

Returns the node's namespace URI for a given prefix, or _null_ if none found. Supplying _null_ for the prefix will return the default namespace.

```javascript
body.lookupNamespaceURI(null);
svg.lookupNamespaceURI('xlink');
```

### isDefaultNamespace(namespace)

Returns a boolean value indicating whether the node's default namespace is _namespace_.

```javascript
body.isDefaultNamespace('http://www.w3.org/1999/xhtml');
svg.isDefaultNamespace('http://www.w3.org/2000/svg');
```

---

### appendChild(child)

Appends a node to the node's children, where _child_ is the node to append. If _child_ already exists in the document, the node is moved to the new position.

```javascript
body.appendChild(child);
body.appendChild(body.firstChild);
```

### insertBefore(child, before)

Inserts a new child node just before a given child node, where _child_ is the new child node, and _before_ is the existing child node to insert the new node before. If _child_ already exists in the document, the node is moved to the new position. The method returns the newly inserted node.

```javascript
var first = body.insertBefore(body.lastChild, body.firstChild)
```

### replaceChild(newChild, oldChild)

Replaces one child node of the node with another, where _newChild_ is the new child and _oldChild_ is the node to be replaced. If _newChild_ already exists in the document, the node is moved to the new position. The replaced node is returned.

```javascript
var oldFirst = body.replaceChild(body.lastChild, body.firstChild)
```

### removeChild(child)

Removes a child node from the node, where 'child' is the node to be removed. The method returns the newly removed child.

```javascript
var removed = body.removeChild(body.firstChild)
```


## ParentNode

Implemented by _Document_, _DocumentFragment_, and _Element_.

### children

Returns a _HTMLCollection_ of all the children of this parent node that is of the type Element.

```javascript
body.children;
```

### firstElementChild

Returns the first child that is of type _Element_ for this parent node, or null if there is none.

```javascript
body.firstElementChild;
```

### lastElementChild

Returns the last child that is of type _Element_ for this parent node, or null if there is none.

```javascript
body.lastElementChild;
```

### childElementCount

Returns the number of children that is of type _Element_ for this parent node.

```javascript
body.childElementCount;
```

---

### querySelector(selectors)

Returns the first element that is a descendant of the _ParentNode_ that matches the specified group of selectors, where the parameter _selectors_ is a string containing the selectors.

```javascript
document.querySelector('div.foo, div.bar');
body.querySelector('.baz');
body.firstElementChild.querySelector('div > p');
```

### querySelectorAll(selectors)

Returns all elements (as a NodeList) that is a descendant of the _ParentNode_ that matches the specified group of selectors, where the parameter _selectors_ is a string containing the selectors.

```javascript
document.querySelectorAll('div.foo, div.bar');
body.querySelectorAll('.baz');
body.firstElementChild.querySelectorAll('div > p');
```


## Links

- [DOM Living Standard - Node](https://dom.spec.whatwg.org/#node)
- [DOM Living Standard - ParentNode](https://dom.spec.whatwg.org/#interface-parentnode)