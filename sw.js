const CACHE_NAME = 'pwa-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Встановлення Service Worker та кешування файлів
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Перехоплення запитів для роботи офлайн
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
