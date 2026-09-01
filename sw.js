const CACHE_NAME = 'pwa-v2';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Встановлення та очищення старого кешу
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // Примусово активуємо новий SW відразу
});

// Перехоплення запитів
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
