/* Daily To-Do service worker: makes the app work fully offline.
   If you change any app file, bump CACHE so phones pick up the new version.
   The prefix keeps this app's cache separate from other apps on the same github.io address. */
const PREFIX = 'daily-todo-';
const CACHE = PREFIX + 'v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(event.request, { ignoreSearch: true }).then((hit) => {
        if (hit) return hit;
        return fetch(event.request)
          .then((res) => {
            if (res && res.ok && new URL(event.request.url).origin === self.location.origin) {
              cache.put(event.request, res.clone());
            }
            return res;
          })
          .catch(() => cache.match('./index.html'));
      })
    )
  );
});
