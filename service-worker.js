// const CACHE_NAME = "stockFlow-v1";
//
// const ASSETS_TO_CACHE = [
//     // "README.md",
//     "app.js",
//     "cache-manifest.json",
//     "favicon.ico",
//     "index.html",
//     "manifest.json",
//     "placeholder.ico",
//     "service-worker.js",
//     "service-worker_old.js",
//     "styles.css",
//     "./app/developer-info.html",
//     "./app/feedback.html",
//     "./app/index.html",
//     "./app/inventory.html",
//     "./app/modify-element.html",
//     "./app/newElement.html",
//     "./app/notification.html",
//     "./app/script.js",
//     "./app/settings.html",
//     "./app/styles.css",
//     "./app/transaction.html",
//     "./app/debug/index.html",
//     "./app/debug/inputCode.js",
//     "./app/debug/testPresets.json",
//     "./app/specificScript/devInfo.js",
//     "./app/specificScript/home.js",
//     "./app/specificScript/notifications.js",
//     "./app/specificScript/transactions.js",
//     "./assets/byteLab.svg",
//     "./assets/placeholder.svg",
//     "./assets/favicons/android-chrome-192x192.png",
//     "./assets/favicons/android-chrome-512x512.png",
//     "./assets/favicons/apple-touch-icon.png",
//     "./assets/favicons/favicon-16x16.png",
//     "./assets/favicons/favicon-32x32.png",
//     "./assets/favicons/favicon.ico",
//     "./assets/icons/boxes.svg",
//     "./assets/icons/boxes_old.svg",
//     "./assets/icons/home.svg",
//     "./assets/icons/notification.svg",
//     "./assets/icons/searchicon.svg",
//     "./controllers/Controller.js",
//     "./controllers/debugCtrl.js",
//     "./models/Category.js",
//     "./models/Conto.js",
//     "./models/Object.js",
//     "./models/PaymentOptions.js",
//     "./models/Transaction.js",
//     "./models/defaultData",
//     "./models/memory.js",
//     "./models/defaultData/categories.json",
//     "./models/defaultData/payOptions.json",
//     "./view/CategoryUI.js",
//     "./view/ContoUI.js",
//     "./view/accountSelector.js",
//     "./view/navbar.js",
//     "./view/topbar.js",
//     "./view/ui.js",
//     "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap"
// ];
//
// // Installazione del Service Worker
// self.addEventListener("install", (e) => {
//     console.log("[Service Worker] Install");
//     e.waitUntil(
//         (async () => {
//             const cache = await caches.open(CACHE_NAME);
//             console.log("[Service Worker] Caching all: app shell and content");
//             try{
//                 await cache.addAll(ASSETS_TO_CACHE);
//             } catch (e) {
//                 console.log(e)
//             }
//         })(),
//     );
// });
//
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         fetch(event.request)
//             .then((response) => {
//                 // Se la richiesta ha successo, mettiamo la risposta nella cache
//                 if (!response || response.status !== 200 || response.type !== 'basic') {
//                     return response;
//                 }
//
//                 const responseToCache = response.clone();
//
//                 caches.open(CACHE_NAME)
//                     .then((cache) => {
//                         cache.put(event.request, responseToCache);
//                     });
//                 sessionStorage.setItem("offline", false);
//                 return response;
//             })
//             .catch(() => {
//                 // Se la richiesta di rete fallisce, cerchiamo la risorsa nella cache
//                 console.log("Running offline! Loading from cache")
//                 sessionStorage.setItem("offline", true);
//                 return caches.match(event.request);
//             })
//     );
// });
//
// // Attivazione del service worker
// self.addEventListener('activate', (event) => {
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cacheName) => {
//                     if (cacheName !== CACHE_NAME) {
//                         console.log('[Service Worker] Pulizia della vecchia cache:', cacheName);
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
// });