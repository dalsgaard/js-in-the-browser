# Attr

```
var attr = document.createAttribute('lang')
var attrNS = document.createAttributeNS('http://foo.bar/2015/baz', 'foo')
```

## Properties

### name

Returns the name of the attribute.

```
> attr.name // -> "lang"
```

### value

Gets or sets the value of the attribute.

```
> attr.value = 'en'
```

### ownerElement

Returns the element that owns the attribute, or null if it is unattached.

```
> attr.ownerElement
```

### namespaceURI

Returns the namespace of the attribute, or null if there is no namespace.

```
> attrNS.namespaceURI // -> "http://foo.bar/2015/baz"
> attr.namespaceURI // -> null
```

### prefix

Returns the prefix of the attribute resolved from the namespace, or null if there is no namespace.

```
> attrNS.prefix // e.g. -> "baz"
> attr.prefix // -> null
```

### localName

Returns the name of the attribute (without prefix).

```
> attrNS.localName // -> "foo"
> attr.localName // -> "lang"
```
