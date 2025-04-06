const CACHE_NAME = "spese-app-v1";
const MANIFEST_URL = "cache-manifest.json"; // URL of the manifest file

// Function to simulate glob patterns
function matchesPattern(path, pattern) {
    // Simple pattern matching:
    // - * matches any sequence of characters
    // - ** matches any sequence of characters including /
    // - ? matches any single character
    // - other characters match themselves
    const regexPattern = pattern
        .replace(/\*\*/g, "(.+)") // Replace ** with (.+)
        .replace(/\*/g, "([^/]+)") // Replace * with ([^/]+)
        .replace(/\?/g, "(.)") // Replace ? with (.)
        .replace(/\./g, "\\.") // Escape .
        .replace(/\//g, "\\/"); // Escape /
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
}

// Function to get assets to cache
async function getAssetsToCache() {
    const patterns = [
        "*.html",
        "*.css",
        "*.js",
        "assets/icons/*.png",
        "manifest.json",
        "*.ico",
        "view/*.js",
        "controllers/*.js",
        "models/*.js",
        "models/defaultData/*.json",
        // Add more patterns as needed
    ];
    
    const assets = [];
    
    try {
        const response = await fetch(MANIFEST_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch manifest: ${response.status}`);
        }
        const manifest = await response.json();
        
        for (const path of manifest.files) {
            for (const pattern of patterns) {
                if (matchesPattern(path, pattern)) {
                    assets.push(path);
                }
            }
        }
    } catch (error) {
        console.error("Error getting assets to cache:", error);
        // Handle the error appropriately (e.g., cache a default set of files)
    }
    
    // Add the root files
    for (const pattern of patterns) {
        if (matchesPattern("manifest.json", pattern)) {
            assets.push("manifest.json");
        }
        if (matchesPattern("service-worker.js", pattern)) {
            assets.push("service-worker.js");
        }
    }
    
    return assets;
}

// Installazione del Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const assets = await getAssetsToCache();
            const cache = await caches.open(CACHE_NAME);
            return cache.addAll(assets);
        })()
    );
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