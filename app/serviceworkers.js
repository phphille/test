var CACHE = './service-worker.js';

if ("serviceWorker" in navigator) {
  console.log('exists');
  // Service worker registered
  navigator.serviceWorker.register(CACHE, {
    scope: '.'
  })
  .then(function(registration) {
    console.log('The service worker has been registered ', registration);
  })
  .catch(err => {
    // Service worker registration failed
    console.log(err);
  });

  self.addEventListener('install', function() {
    console.log('The service worker is being installed.');
  });

  self.addEventListener('fetch', function() {

  });

  self.addEventListener('activate', function() {

  });

} else {
  // Service worker is not supported
}
