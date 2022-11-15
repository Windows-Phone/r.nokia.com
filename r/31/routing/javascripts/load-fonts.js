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

{
  var fontsFailed = function() {
    var h = document.getElementById('html-tag');
    h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, ' ');
  };
  if (window.slowConnection != true && window.typeKitConfig !== undefined) {
    // give typekit 2 seconds to load all fonts before forcefully viewing the site
    setTimeout(function() { fontsFailed(); }, 2000);
    try { Typekit.load(window.typeKitConfig); } catch (e) { fontsFailed(); }
  } else {
    fontsFailed();
  }
}
