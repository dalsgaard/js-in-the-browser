# Mutation Observers

## MutationObserver

### Constructor

```javascript
var observer = new MutationObserver(function (mutations) {
  // mutations is an array of _MutationRecord_ objects
});
```

### observe()

The _observe_ method takes two arguments - the _target_ and an _options_ object.

```javascript
observer.observe(target, {
  // options
}); 
```

#### Options

The following options can be given:

##### childList

If _true_ adding and removing child nodes will be observed.

##### attributes

If _true_ mutations to attributes will be observed.

##### characterData

If _true_ mutations to character data will be observed.

##### subtree

If _true_ not only the target, but also all its child nodes will be observed.

##### attributeOldValue

If _true_ old values for attributes will be recorded.

##### characterDataOldValue

If _true_ old values for mutating character data will be recorded.

##### attributeFilter

An array of attribute names that should be observed.

### disconnect()

Stop listening for changes.

```javascript
observer.disconnect(); 
```


## MutationRecord

### Properties

A _MutationRecord_ has the following properties.

#### type

A string indicating the type of mutation that occurred. _type_ can have one of the following values.

- 'attributes'
- 'characterData'
- 'childList'

#### target

The target of the mutation (not necessary the same as the target given to the observe method).

#### addedNodes

A _NodeList_ of the added nodes.

#### removedNodes

A _NodeList_ of the removed nodes.

#### previousSibling

The previous sibling of the node(s) added or removed.

#### nextSibling

The next sibling of the node(s) added or removed.

#### attributeName

The name of the changed attribute.

#### attributeNamespace

The namespace of the changed attribute.

#### oldValue

The old value (attribute or character data) recorded before the change.


## Example

```javascript
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    var name = mutation.attributeName;
    var value = mutation.target.getAttribute(name);
    var old = mutation.oldValue;
    console.log(name + ' changed from ' + old + ' to ' + value);
  });
});
var target = document.querySelector('body > section');
observer.observe(target, {
  attributes: true,
  attributeOldValue: true
});
```


## Links

- [DOM Living Standard](https://dom.spec.whatwg.org/#mutation-observers)
- [Can I Use](http://caniuse.com/#feat=mutationobserver)