function loadScript(src, onload) {
  var s = document.documentElement.appendChild(
    document.createElement('script')
  );
  s.type = 'text/javascript';
  s.onload = onload;
  s.src = src;
}

function loadTest(what, message) {
  requiring(what);
  loadScript('./index.js?_=' + Math.random(), function () {
    alert(message || 'OK');
  });
}

function requiring(what) {
  function require() { return what; }
  require.cache = {};
  require.resolve = require;
  window.require = require;
  window.global = window;
}
