Video.js Zoom Rotate
=======================
A plugin that allows you to set the Zoom level and a rotation for video and poster with [Video.js](https://github.com/videojs/video.js/).

Install
----------------
Install it via bower with `bower i --save videojs-rotatezoom`


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

Licence
-------
The piwigo-videojs plugin for Piwigo is free software:  you can redistribute it
and/or  modify  it under  the  terms  of the  GNU  General  Public License  as
published by the Free Software Foundation.

This program  is distributed in the hope  that it will be  useful, but WITHOUT
ANY WARRANTY; without even the  implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

See <http://www.gnu.org/licenses/gpl.html>.

