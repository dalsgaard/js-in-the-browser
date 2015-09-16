# File API

## Blob

### Constructor

```javascript
var blob = new Blob(['Foo', 'Bar'], { type: 'text/plain' })
```

```javascript
var a = new ArrayBuffer(100);
// ...
var blob = new Blob([a], { type: 'image/png' })
```

```javascript
var a = new Int8Array(100);
// ...
var blob = new Blob([a], { type: 'image/png' })
```

### size

Returns the size in bytes.

```javascript
blob.size // -> 6
```

### type

Returns the MIME type, or an empty string if no _type_ is set.

```javascript
blob.type //-> "text/plain"
```

### slice(from, to)

Returns a new _Blob_ that is a slice from _from_ until _to_.

```javascript
blob.slice(0, 3);
```

## FileReader

### Constructor

```javascript
var reader = new FileReader();
```

### readAsArrayBuffer()

Reads the _blob_ as a _ArrayBuffer_.

```javascript
reader.readAsArrayBuffer(blob);
```

### readAsDataURL()

Reads the _blob_ as a _Data URL_.

```javascript
reader.readAsDataURL(blob);
```

### readAsText()

Reads the _blob_ as _Text_.

```javascript
reader.readAsText(blob);
```

### abort()

Aborts the current read operation.

```javascript
reader.abort();
```

### error

The error that occurred while reading the _blob_, or _null_ if no error occurred.

```javascript
reader.error;
```

### result

The result of the read operation.

```javascript
reader.result;
```

### readyState

The state of the reader.


```javascript
reader.readyState;
```

The Reader can be in one of the following states.

- EMPTY
- LOADING
- DONE

```javascript
FileReader.DONE; // -> 2
reader.readyState === FileReader.LOADING;
```

### Events

_FileReader_ inherits from _EventTarget_.

FileReader emits the following events.

- abort
- error
- load
- loadstart
- loadend
- progress



## FileList

```html
<input type="file">
<script>
  var input = document.querySelector('input[type=file]');
  input.addEventListener('change', function (e) {
  	var files = this.files;
    console.log(files);
  });
</script>
```

### multiple

```html
<input type="file" multiple>
```

### accept

```html
<input type="file" accept="text/*">
```

```html
<input type="file" accept="image/png">
```

### length and item()

```javascript
for (var i = 0; i < files.length; i++) {
  var item = files.item(i);
  console.log(item);
}
```

```javascript
var item = files[i];
```

## File

_File_ inherits from _Blob_.

### name

The name of the file.

```javascript
files[0].name;
```

### lastModified

Time of the last modification of the file (number of milliseconds since 1 January, 1970 UTC).

```javascript
files[0].lastModified;
```


## Links

- [File API](https://w3c.github.io/FileAPI/)
- [Can I Use](http://caniuse.com/#feat=blobbuilder)
- [Can I Use](http://caniuse.com/#feat=bloburls)
