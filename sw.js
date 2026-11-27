const CACHE_NAME = 'business-empire-v1';
const ASSETS = [
  '/MYBUSINESS-EMPIRE/',
  '/MYBUSINESS-EMPIRE/index.html',
  '/MYBUSINESS-EMPIRE/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
