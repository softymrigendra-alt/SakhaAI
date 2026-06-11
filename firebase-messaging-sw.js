importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB4m6-Ym-UAcNYw93ysMc0bF_L-Aadze_c",
  authDomain: "sakhaa-ai.firebaseapp.com",
  projectId: "sakhaa-ai",
  storageBucket: "sakhaa-ai.firebasestorage.app",
  messagingSenderId: "856090989479",
  appId: "1:856090989479:web:494fdc4ae8831de4349c82"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const notif = payload.notification || {};
  const data = payload.data || {};

  self.registration.showNotification(notif.title || 'Sakhaa', {
    body: notif.body || '',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    data: data,
    tag: data.tag || 'sakhaa',
    renotify: false,
    requireInteraction: false
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const screen = event.notification.data && event.notification.data.screen;
  const url = screen ? `/?screen=${screen}` : '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if ('focus' in client) {
          if (screen) client.postMessage({ type: 'NOTIFICATION_CLICK', screen });
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
