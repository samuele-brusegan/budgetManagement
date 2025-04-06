const CACHE_NAME = "spese-app-v1";
const ASSETS_TO_CACHE = [
    "index.html", 
    "styles.css", 
    "app.js", 
    "view/home.js", 
    "view/navbar.js", 
    "controllers/Controller.js", 
    "models/Account.js", 
    "models/Transaction.js", 
    "models/defaultData/defaultData.json", 
    "assets/icons/icon-192x192.png", 
    "assets/icons/icon-512x512.png", 
    "manifest.json", 
    "service-worker.js", 
    "favicon.ico", 
    
    "app/developer-info.html", 
    "app/feedback.html", 
    "app/modify-element.html", 
    "app/newElement.html", 
    "app/notification.html", 
    "app/settings.html", 
    "app/transactions.html", 
    "app/script.js", 
    "app/specificScript/devInfo.js", 
    "app/specificScript/home.js", 
    "app/specificScript/notifications.js", 
    "app/specificScript/transactions.js", 
    "app/debug/index.html", 
    "app/debug/inputCode.js", 
    "app/debug/testPresets.json" 
];

// Installazione del Service Worker
self.addEventListener("install", (event) => {
    console.log("[Service Worker] Install")
    try {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
        );
    } catch (e) {
        console.error(e)
    }
});

// Attivazione del Service Worker
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

// Intercettazione delle richieste di rete
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
