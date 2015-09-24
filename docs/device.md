# Device

## Touch

### Events

The following touch event types exists.

#### touchstart

A touch started.

```javascript
target.addEventListener('touchstart', function (event) {
  // ...
});
```

#### touchend

A touch ended.

```javascript
target.addEventListener('touchend', function (event) {
  // ...
});
```

#### touchcancel

A touch was canceled.

```javascript
target.addEventListener('touchcancel', function (event) {
  // ...
});
```

#### touchleave

A touch left the touch surface.

```javascript
target.addEventListener('touchleave', function (event) {
  // ...
});
```

#### touchmove

A touch moved.

```javascript
target.addEventListener('touchmove', function (event) {
  // ...
});
```

### TouchEvent

#### changedTouches

Returns all touches changed by the event.

```javascript
event.changedTouches;
```

#### targetTouches

Returns all touches where the current target is the target.

```javascript
event.targetTouches;
```

#### touches

Returns all touches currently on the surface.

```javascript
event.touches;
```


## Orientation

### Events

The _window_ object emits a  _deviceorientation_ event when the device orientation changes.  

```javascript
window.addEventListener('deviceorientation', function (event) {
  // ...
});
```

### DeviceOrientationEvent

#### absolute

Returns a boolean indicating whether the measurement is _absolute_.

```javascript
event.absolute;
```

#### alpha

Returns the rotation of the device around the Z axis.

```javascript
event.alpha;
```

#### beta

Returns the rotation of the device around the X axis.

```javascript
event.beta;
```

#### gamma

Returns the rotation of the device around the Y axis.

```javascript
event.gamma;
```

## Motion

### Events

The _window_ object emits a  _devicemotion_ event when the device moves.  

```javascript
window.addEventListener('devicemotion', function (event) {
  // ...
});
```

### DeviceMotionEvent

#### acceleration

Returns the acceleration of the device on the three axis X, Y and Z.

```javascript
event.acceleration;
```

#### accelerationIncludingGravity

Returns the acceleration of the device on the three axis X, Y and Z with the effect of gravity.

```javascript
event.accelerationIncludingGravity;
```

#### rotationRate

Returns the rotation rate of the device in the three orientation axis alpha, beta and gamma.

```javascript
event.rotationRate;
```

#### interval

The interval between measurements (in milliseconds).

```javascript
event.interval;
```

## Links

- [Touch Events](http://www.w3.org/TR/touch-events/)
- [DeviceOrientation Event Specification](http://www.w3.org/TR/orientation-event/)
- [Can I Use - Device Orientation](http://caniuse.com/#feat=deviceorientation)
- [Can I Use - Touch](http://caniuse.com/#feat=touch)