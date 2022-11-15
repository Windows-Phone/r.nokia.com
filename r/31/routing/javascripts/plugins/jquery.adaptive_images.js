/*global $, jQuery, window, BrowserDetect*/

/**
 * TODO: refactor and cleanup. 
 * functionality is quire ok. 
 * - .adaptive-exclude' ?!? what is meaning of this. 
 * - just make it cleaner. 
 */

(function ($) {

  return $.plugin('adaptiveImages', function () {

    var _el,
      _images,
      _selector,
      _this,
      _currentUsableResolutions,
      _sizes = [],
      forceImageLoad = BrowserDetect.browser === 'Symbian' || window.location.search.indexOf("debugmode=screenshot") > 0,
      _window_height = 0;

    /*
     *   loops and collects available resolutions for current screen size
     */
    var resetCurrentMachingResolutions = function () {
      var i, _i, _len, size,
        width = viewport().width;
        
      _window_height = viewport().height;

      // reset old state
      _currentUsableResolutions = [];
      for (_i = 0, _len = _sizes.length; _i < _len; _i++) {
        size = _sizes[_i];
        if (width >= size.value) {
          _currentUsableResolutions.push(size.key);
        }
      }
      //pust original images to available resolutions as fallback image
      _currentUsableResolutions.push('original');

      // Set current breakpoint for tracking purposes
      for (i = 0; i < window.breakpoints.length; i++) {
        window.currentbreakpoint = window.breakpoints[i];
        if (width >= window.breakpoints[i]) {
          break;
        }
      }
    };

    /*
     *   Respond to onResize event
     */
    var onResize = function (adaptHiddenImages) {

      resetCurrentMachingResolutions();
      render(adaptHiddenImages);
    };

    /*
     *   public method to load adaptive images that are visible and run rerender.
     */
    var refresh = function () {
      initAdaptiveImages();
      return onResize();
    };

    /*
     *   just sort given sizes
     */
    var sortSizes = function (sizes) {
      return (sizes || []).sort(function (a, b) {
        return b.value - a.value;
      });
    };

    /*
     *  Bind needed events
     */
    var handleBindings = function () {
      // unbind old events if they exitst.  Use components common namespace to cleanup all events.
      $(window).off('resize.adaptiveImages');
      $(window).off('scroll.adaptiveImages');

      // bind events (again)
      $(window).on('resize.adaptiveImages', $.debounce(onResize, 500));
      $(window).on('scroll.adaptiveImages', $.debounce(onScroll, 300));

      PubSub.subscribe('image.added', refresh);
    };

    /*
     *   create selector string that is used to collect all adaptive images on page
     */
    var collectSelectors = function (sizes) {

      var selector_array = [],
        _i,
        _len;

      for (_i = 0, _len = sizes.length; _i < _len; _i++) {
        selector_array.push("img[data-" + sizes[_i].key + "]");
      }
      return selector_array.join(', ');
    };

    /* 
     *   Sets data-origin attribute for maching adaptive images.
     */
    var initAdaptiveImages = function () {
      // add data-origin attribute to all (adaptive) images
      $(_selector).filter(':not(img[data-original])').each(function () {
        return $(this).attr('data-original', $(this).attr('src'));
      });
      // collect images to variable for later use
      _images = $('img[data-original]');
    };

    /*
     *   Select larges image available on data-attributes for current resolution.
     *   If there's no any adaptive resolution available, use data-origin as fallback image.
     */
    var render = function () {
      var $img, image, prop, size, src, type, width, _i, _len, _j, _len1, _results;

      for (_i = 0, _len = _images.length; _i < _len; _i++) {
        image = _images[_i];
        $img = $(image);

        if ($img.is('.adaptive-exclude') === false) {

          for (_j = 0, _len1 = _currentUsableResolutions.length; _j < _len1; _j++) {
            type = _currentUsableResolutions[_j];
            src = $img.attr('data-' + type);
            if (src === undefined) {
              continue;
            }
            if ($img.attr('src') !== src && (imgShouldBeLoaded($img))) {
              $img.attr('src', src);
            }
            break;
          }
        }
      }
    };

    /*
     *   Check if image should be rendered.
     *   If client is symbian devise or is on viewport (or just under), render image.
     */
    var imgShouldBeLoaded = function (img) {

      var imagesTo, imgTop, _window;
      if (forceImageLoad) {
        return true;
      }
      _window = $(window);

      imgTop = Math.floor($(img).offset().top);
      imagesTo = viewport().height * 2 + _window.scrollTop();
      return imgTop < imagesTo ||  !$(img).is('.lazy');
    };

    /*
     *   Respond to onScroll event
     */
    var onScroll = function () {
      render();
    };

   

    /*
     *   plugin init method.
     */
    var initComponent = function (el) {
      _el = el;
      _this = this;

      _sizes = sortSizes(_this.options);

      _selector = collectSelectors(_sizes);

      if (_sizes === 0) {
        return;
      }
      // if symbian, dont even bind unused events
      if (!forceImageLoad) {
        handleBindings();
      }
      refresh();
    };

    /*
     *   plugin destroy method.
     */
    var destroyComponent = function (el) {
      $(window).off('resize.adaptiveImages');
      return $(window).off('scroll.adaptiveImages');
    };

    /*
     *   plugin methods.
     */
    return {
      init: initComponent,
      destroy: destroyComponent
    };

  });
})(jQuery);
