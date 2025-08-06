self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('mcee-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'photo.jpg',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
