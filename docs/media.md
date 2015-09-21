# Media API's

## Audio

Audio elements inherits from _HTMLMediaElement_.

### Getting an _audio_ element

```html
<body>
  <audio></audio>
  <script>
    var audio = document.querySelector('audio');
  </script>
</body>
```

```html
<script>
  var audio = new Audio('song.mp3');
</script>
```

```html
<script>
  var audio = new Audio();
</script>
```

### src

An URL for the media resource to play.

```javascript
audio.src = url;
```

### preload

Tells the browser whether or not we want it to preload any data. The value must be one of the following.

- 'none'
- 'metadata'
- 'auto'

Where 'auto' is default.

```javascript
audio.preload = 'none';
```

### load()

Loads the media resource if not already loaded.

```javascript
audio.load();
```

### play()

Start playing.

```javascript
audio.play();
```

### pause()

Pause the playing.

```javascript
audio.pause();
```

### paused

_true_ if not playing.

```javascript
audio.paused;
```

### duration

The duration (in seconds) of the media resource being played.

```javascript
audio.duration;
```

### currentTime

Gets or sets the current time (in seconds).

```javascript
audio.currentTime;
audio.currentTime = 40.2;
```

### ended

Whether or not the _currentTime_ has reached _duration_.

```javascript
audio.ended;
```

### loop

Whether or not the playing should loop.

```javascript
audio.loop;
audio.loop = true;
```

### volume

Gets or sets the volume. Must be between 0.0 and 1.0.

```javascript
audio.volume;
audio.volume = 0.2;
```

### muted

Gets or sets whether or not the audio element is muted.

```javascript
audio.muted;
audio.muted = true;
```

### canPlayType()

Returns a string indicating if the given mime type can played. One of three values can be returned - 'maybe', 'probably', or '' (mime type not supported).

```javascript
audio.canPlayType('audio/mpeg');
```

### networkState

Returns the network state of the audio element.

```javascript
audio.networkState;
```

The request can be in one of the following ready states.

- NETWORK\_EMPTY (0)
- NETWORK\_IDLE (1)
- NETWORK\_LOADING (2)
- NETWORK\_NO\_SOURCE (3)

```javascript
HTMLMediaElement.NETWORK\_IDLE; // -> 1
req.readyState === HTMLMediaElement.NETWORK_LOADING;
```

### readyState

Returns the ready state of the audio element.

```javascript
audio.readyState;
```

The request can be in one of the following ready states.

- HAVE\_NOTHING (0)
- HAVE\_METADATA (1)
- HAVE\_CURRENT_DATA (2)
- HAVE\_FUTURE_DATA (3)
- HAVE\_ENOUGH_DATA (4)

```javascript
HTMLMediaElement.HAVE_METADATA; // -> 1
req.readyState === HTMLMediaElement.HAVE_CURRENT_DATA;
```

### Events

_HTMLMediaElement_ inherits from _EventTarget_ and emits the following events.

- loadstart
- progress
- suspend
- abort
- error
- emptied
- stalled
- loadedmetadata
- loadeddata
- canplay
- canplaythrough
- playing
- waiting
- seeking
- seeked
- ended
- durationchange
- timeupdate


```javascript
audio.addEventListener('durationchange', function () {
  console.log(audio.duration);
});
```


## Video

Video elements inherits from _HTMLMediaElement_.

### Getting an _video_ element

```html
<body>
  <video width="400"></video>
  <script>
    var video = document.querySelector('video');
  </script>
</body>
```

```html
<script>
  var video = new Video('movie.mp4');
  window.document.body.appendChild(video);
</script>
```

```html
<script>
  var video = new Video();
  window.document.body.appendChild(video);
</script>
```

### poster

Sets the poster that is displayed before the video starts playing.


```javascript
video.poster = url;
```

### width

Sets the width of the video element.

```javascript
video.width = 640;
```

### height

Sets the height of the video element.

```javascript
video.height = 360;
```

## Links

- [The Media Element](https://html.spec.whatwg.org/#media-element)
- [The Audio Element](https://html.spec.whatwg.org/#the-audio-element)
- [The Video Element](https://html.spec.whatwg.org/#the-video-element)
- [Can I Use](http://caniuse.com/#feat=audio)
- [Can I Use](http://caniuse.com/#feat=video)