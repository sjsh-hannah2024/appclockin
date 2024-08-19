self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('staff-form-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/styles.css',
        '/manifest.json',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
