console.log('zoomrotate: Start');

(function(){
    var defaults, extend;
    console.log('zoomrotate: Init defaults');
    defaults = {
      zoom: 1,
      rotate: 0
    };
    console.log('zoomrotate: Init Extend');
    extend = function() {
      var args, target, i, object, property;
      args = Array.prototype.slice.call(arguments);
      target = args.shift() || {};
      for (i in args) {
        object = args[i];
        for (property in object) {
          if (object.hasOwnProperty(property)) {
            if (typeof object[property] === 'object') {
              target[property] = extend(target[property], object[property]);
            } else {
              target[property] = object[property];
            }
          }
        }
      }
      return target;
    };

  /**
    * register the zoomrotate plugin
    */
    videojs.plugin('zoomrotate', function(options){
        console.log('zoomrotate: Register init');
        var settings, player, video;
        settings = extend(defaults, options);

        /* Grab the necessary DOM elements */
        player = this.el();
        video = this.el().getElementsByTagName('video')[0];

        console.log('zoomrotate: '+video.style);
        console.log('zoomrotate: '+options.rotate);
        console.log('zoomrotate: '+options.zoom);

        /* Array of possible browser specific settings for transformation */
        var properties = ['transform', 'WebkitTransform', 'MozTransform',
                          'msTransform', 'OTransform'],
            prop = properties[0];

        /* Iterators and stuff */    
        var i,j,t;

        /* Find out which CSS transform the browser supports */
        for(i=0,j=properties.length;i<j;i++){
          if(typeof player.style[properties[i]] !== 'undefined'){
            prop = properties[i];
            break;
          }
        }

        /* Let's do it */
        video.style[prop]='scale('+options.zoom+') rotate('+options.rotate+'deg)';
        console.log('zoomrotate: Register end');
    });
})();

console.log('zoomrotate: End');