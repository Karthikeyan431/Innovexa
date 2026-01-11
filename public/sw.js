self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network-first strategy (simple & safe)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
