// Service worker بسيط: يسمح بتثبيت التطبيق ولا يخزن شيئاً حتى يظهر آخر تحديث دائماً
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
