# Node

```
var doc = window.document;
var body = window.document.body;
```

```
> doc instanceof Node // -> true
> body instanceof Node // -> true
```

## Properties

### baseURI

Returns the URL of the document.

	> body.baseURI

### childNodes

Returns the node's children as a NodeList.

```
> doc.childNodes
> body.childNodes
```

### firstChild

Returns the node's first child node.

```
> doc.firstChild
```

### lastChild

Returns the node's last child node.

```
> doc.firstChild
```

### localName

Returns the node's local tag name, or null if there is no tag name.

```
> body.localName // -> "body"
> doc.localName // -> null
```

### nextSibling

Returns the node's next sibling (the node after this node in the parents childNodes).

```
> doc.firstChild.nextSibling
```

### nodeName

Returns the node's name.

```
> doc.nodeName // -> "#document"
> body.nodeName // -> "body"
```

### nodeType

Returns an integer value which specifies the type of the node.

Possible values are:

- Node.ELEMENT\_NODE = 1
- Node.TEXT\_NODE = 3
- Node.PROCESSING\_INSTRUCTION\_NODE = 7
- Node.COMMENT\_NODE = 8
- Node.DOCUMENT\_NODE = 9
- Node.DOCUMENT\_TYPE\_NODE = 10
- Node.DOCUMENT\_FRAGMENT\_NODE = 11

### nodeValue

Returns the node's value as a string, or null if it has no value.

```
> body.nodeValue // -> null
> body.firstChild.nodeValue
```

### ownerDocument

Returns the document wherein the node exists.

```
> body.ownerDocument
```

### parentNode

Returns the node's parent node.

```
> body.parentNode
```

### prefix

Returns the node's namespace prefix, or null if there is none.

### previousSibling

Returns the node's previous sibling (the node before this node in the parents childNodes).

```
> doc.lastChild.previousSibling
```

### textContent

Gets or sets the node's content as text (a string), or null if the node is a document, a document type, or a notation.

```
> doc.textContent // -> null
> body.textContent
```

### Methods

### appendChild(child)

Appends a node to the node's children, where 'child' is the node to append. If 'child' already exists in the document, the node is moved to the new position.

```
> var child = ...
> body.appendChild(child)
> body.appendChild(body.firstChild)
```

### cloneNode(deep)

Returns a duplicate of the node. If 'deep' is true, children of the node will also be cloned (deep copy). Default is false (shallow copy), which results in a clone without children.

```
> var clone = body.firstChild.cloneNode(true)
> body.appendChild(clone)
```

### compareDocumentPosition(other)

This method compares the position of the node against another node. 

The result is a bitmask with the following values:

- Node.DOCUMENT\_POSITION\_DISCONNECTED = 1
- Node.DOCUMENT\_POSITION\_PRECEDING = 2
- Node.DOCUMENT\_POSITION\_FOLLOWING = 4
- Node.DOCUMENT\_POSITION\_CONTAINS = 8
- Node.DOCUMENT\_POSITION\_CONTAINED\_BY = 16
- Node.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC = 32

```
> body.firstChild.compareDocumentPosition(body.lastChild) // -> 4
> body.compareDocumentPosition(body.lastChild) // -> 20
> body.compareDocumentPosition(body.lastChild) & Node.DOCUMENT_POSITION_CONTAINED_BY // -> 16
```

### hasChildNodes()

Returns a boolean value indicating whether the node has child nodes or not.

```
> body.hasChildNodes()
```

### insertBefore(child, before)

Inserts a new child node just before a given child node, where 'child' is the new child node, and  'before' is the existing child node to insert the new node before. If 'child' already exists in the document, the node is moved to the new position. The method returns the newly inserted node.

```
> var first = body.insertBefore(body.lastChild, body.firstChild)
```

### isDefaultNamespace(namespace)

Returns a boolean value indicating whether the node's default namespace is 'namespace'.

```
> body.isDefaultNamespace("http://www.w3.org/1999/xhtml")
```

### isEqualNode(other)

Returns a boolean value indicating whether the node is identical to another node, where 'other' is the other node.

Two nodes are identical iff:

- The two nodes are of the same type.
- The following properties are equal: nodeName, localName, namespaceURI, prefix, nodeValue.
- The attributes are equal.
- The children are equal.

```
> body.firstChild.isEqualNode(body.lastChild)
```

### lookupNamespaceURI(prefix)

Returns the node's namespace URI for a given prefix, or null if none found. Supplying null for the prefix will return the default namespace.

```
> body.lookupNamespaceURI(null)
```

### normalize()

Puts the node and all of its sub-tree into a "normalized" form. In a "normalized" form, no text nodes are empty and there are no adjacent text nodes.

```
> body.normalize()
```

### removeChild(child)

Removes a child node from the node, where 'child' is the node to be removed. The method returns the newly removed child.

```
var removed = body.removeChild(body.firstChild)
```

### replaceChild(newChild, oldChild)

Replaces one child node of the node with another, where 'newChild' is the new child and 'oldChild' is the node to be replaced. If 'newChild' already exists in the document, the node is moved to the new position. The replaced node is returned.

```
> var oldFirst = body.replaceChild(body.lastChild, body.firstChild)
```

