Video.js Zoom Rotate
=======================
A plugin that allows you to set the Zoom level and a rotation for video and poster with [Video.js](https://github.com/videojs/video.js/).

Using the Plugin
----------------
The plugin automatically registers itself when you include videojs.zoomrotate.js in your page:

    <script src='videojs.zoomrotate.js'></script>

Once you have your video element created, you can activate the zoomrotate plugin.
The plugin take 2 options rotate and zoom.
It use the CSS scale property and the rotate property.

    video.zoomrotate({
      rotate: 90,
      zoom: 1.5
      }
    });

or

    data-setup='{ "plugins": { "zoomrotate": { "rotate": "90", "zoom": "1.5" } } }'

Options
-------

```text
    defaults = {
      zoom: 1,
      rotate: 0,
      debug: true
    };
```

Known Issues
------------
It won't work when using the flash fallback.

Thanks
------------
Thanks to codepo8, https://github.com/codepo8/rotatezoomHTML5video
