(function($) {

  $.debounce = function(callback, delay) {
    var timeout;
    return function() {
      var self = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        callback.apply(self, args);
      }, delay);
    };
  };

  $.debounceScroll = function(callback, delay) {
    var timeout;
    return function() {
      var self = this, args = arguments;
      
      if (timeout) {
        return;
      }

      timeout = setTimeout(function() {
        clearTimeout(timeout);
        timeout = null;
        callback.apply(self, args);
      }, delay);
    };
  };
  
  $.delay =  function(func, wait) {
    var self = this, args = Array.prototype.slice.call(arguments, 2), whenDone = [];
    
    setTimeout(function(){ 
      func.apply(self, args);
      for(var i = 0; i < whenDone.length; i++) {
        whenDone[i](); 
      } 
      whenDone = [];
    }, wait);
    
    return {
      done: function (run_when_done) {
        whenDone.push(run_when_done);
      }
    }

  };
  
})(jQuery);
