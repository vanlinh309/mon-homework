// Mon's Learning Games — Service Worker
// Cache-first strategy for all static assets, runtime cache for images

const CACHE = 'mon-games-v1';
const STATIC = [
  './index.html',
  './style.css',
  './sounds.js',
  './sidebar.js',
  './nav.js',
  './lesson1-shadow.html',
  './lesson2-maze.html',
  './lesson3-patterns.html',
  './lesson4-counting.html',
  './lesson5-coloring.html',
  './assignments/lesson1.js',
  './assignments/lesson2.js',
  './assignments/lesson3.js',
  './assignments/lesson4.js',
  './assignments/lesson5.js',
  './manifest.json',
  './favicon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(STATIC))
      .catch(() => {}) // don't fail install if some assets are missing
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request)
        .then(response => {
          if (!response.ok) return response;
          // Cache images and other assets dynamically
          if (e.request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
            const clone = response.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Return a simple offline message for HTML pages
          if (e.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
    })
  );
});
