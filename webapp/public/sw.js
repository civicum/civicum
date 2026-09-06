/**
 * Service Worker CIVICUM — PWA offline-first
 * Estrategia: NetworkFirst para API, CacheFirst para assets estáticos
 * Fuente: Investigación Parte 5.1 (Dignidad Offline) + Parte 5.4 (Espera/Incertidumbre)
 */

const CACHE_NAME = 'civicum-v1';
const OFFLINE_URL = '/offline.html';

// Assets a precachear (los esenciales)
const PRECACHE_ASSETS = [
  '/',
  '/landing',
  '/offline.html',
  '/favicon.ico',
  '/manifest.json',
];

// API routes que se cachean en segunda visita
const API_CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Instalación: guardar assets esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).then(() => self.skipWaiting());
    })
  );
});

// Activación: limpiar caches viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: servir desde cache si está disponible, si no, red
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // No interceptar llamadas a la API de autenticación o POST
  if (url.pathname.startsWith('/api/') && request.method !== 'GET') {
    return event.respondWith(fetch(request));
  }

  // Estrategia CacheFirst para assets estáticos y rutas conocidas
  if (request.destination === 'image' || request.destination === 'font' || request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Estrategia NetworkFirst para API GET (datos frescos)
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Offline: servir desde cache o página offline
        return caches.match(request).then((cached) => {
          return cached || caches.match(OFFLINE_URL);
        });
      })
  );
});

// Notificaciones Push
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const options = {
    body: data.body || 'Actualización de tu comuna',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
    },
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'CIVICUM', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
