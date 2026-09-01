const CACHE_NAME = 'pwa-v4'; 
const ASSETS = [
  '/my-first-pwa/',
  '/my-first-pwa/index.html',
  '/my-first-pwa/manifest.json',
  '/my-first-pwa/icon-192.png',
  '/my-first-pwa/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
