if (window.performance) {
  var t = window.performance.timing, start = t.fetchStart, loaded = t.domLoading;
  if (t.domContentLoaded) { loaded = Math.max(loaded, t.domContentLoaded); }
  if (t.domContentLoadedEventStart) { loaded = Math.max(loaded, t.domContentLoadedEventStart); }
  if (t.domInteractive) { loaded = Math.max(loaded, t.domInteractive); }
  // if browser took longer than 5 seconds to reach this point set a flag to optimize site for slow connections
  if (start > 0 && loaded > 0) {
    var a = document.getElementById('html-tag');
    a = a.attributes.getNamedItem('slowConnectionTimeout');
    var timeout = 5000;
    if (a) { timeout = a.value }
    window.slowConnection = loaded - start > timeout;
  }
}
if (window.location.search.indexOf("debugmode=screenshot")>0) {
  window.slowConnection = false;
}
if (window.location.search.indexOf("debugslow=")>0) {
  window.slowConnection = true;
}
