# Typed Arrays

## ArrayBuffer

The _ArrayBuffer_ is a fixed-length raw binary data buffer.

### Constructor

```javascript
var b = new ArrayBuffer(100);
```

### byteLength

Returns the length.

```javascript
b.byteLength // -> 100
```

### slice(from[, to])

Returns a new _ArrayBuffer_ that is a slice from _from_ until _to_. If _to_ is not specified, the slice will continue to the end.

```javascript
b.slice(0, 10);
b.slice(50);
```


## DataView

The DataView is a low-level interface for reading data from and writing it to an _ArrayBuffer_.

### Constructor

```javascript
var view = new DataView(buffer);
```

If a second parameter is given, it is the offset where the view should start.

```javascript
var view = new DataView(buffer, 10);
```

If a third parameter is given, it is the length of the view.

```javascript
var view = new DataView(buffer, 10, 20);
```

### buffer

Returns the underlying _buffer_.

```javascript
view.buffer;
```

### byteOffset

Returns the offset.

```javascript
view.byteOffset;
```

### byteLength

Returns the length.

```javascript
view.byteLength;
```

### set\<DATA-TYPE\>(byteOffset, value);

Where _\<DATA-TYPE\>_ is one of the following

- Int8
- Uint8
- Int16
- Uint16
- Int32
- Uint32
- Float32
- Float64

Sets a value on the view. The first argument is the offset in *bytes*, and the second is the value. The size of the data type is given by the name (in bits, 8 bits = 1 byte).

```javascript
view.setInt8(2, 1);
```

### get\<DATA-TYPE\>(byteOffset);

Gets a value from the view. The argument is the offset in *bytes*.

```javascript
view.getInt16(2); // -> 256
```

## \<DATA-TYPE\>Array

Where _\<DATA-TYPE\>_ is one of the following

- Int8
- Uint8
- Int16
- Uint16
- Int32
- Uint32
- Float32
- Float64

### BYTES\_PER\_ELEMENT

Returns the element size in bytes.

```javascript
Uint32Array.BYTES_PER_ELEMENT // -> 4
```

### Constructor

If the first argument is an _ArrayBuffer_ the view is created on this _buffer_.

```javascript
var a = new Int8Array(buffer);
```

If a second parameter is given, it is the offset where the _typed array_ should start.

```javascript
var a = new Int8Array(buffer, 10);
```

If a third parameter is given, it is the length of the _typed array_.

```javascript
var a = new Int8Array(buffer, 10, 20);
```

If the first argument is an integer a new _ArrayBuffer_ is created for the view. The size of the buffer is the first argument times the value of BYTES\_PER\_ELEMENT.

```javascript
var a = new Int16Array(100);
```

### buffer

Returns the underlying _buffer_.

```javascript
a.buffer;
```

### byteOffset

Returns the offset in bytes.

```javascript
a.byteOffset;
```

### byteLength

Returns the length in bytes.

```javascript
a.byteLength;
```

### length

Returns the length in elements (byteLength / BYTES\_PER\_ELEMENT)

```javascript
a.length;
```

### Accessing elements

```javascript
a[4] = 6;
a[4] // -> 6
```

## ArrayBufferView

_DataView_ and all the _\<DATA-TYPE\>Array_ types is known under one as _ArrayBufferViews_. _ArrayBufferView_ is not an real interface, but a grouping of related elements.

 
## Links

- [Typed Array Specification](https://www.khronos.org/registry/typedarray/specs/latest/)
