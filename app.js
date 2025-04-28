import * as cookies from "models/cookies.js"
// Check and register service worker, TODO: alla fine del progetto rimuovere il commento

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("../service-worker.js")
//         .then(() => {
//             console.log("Service Worker registrato con successo")
//             console.log("Online: "+!sessionStorage.getItem("offline"))
//         })
//         .catch((error) => console.log("Errore nella registrazione del Service Worker:", error));
// }
let isFirstTime = cookies.get("isFirstTime");
//let isFirstTime = sessionStorage.getItem("isFirstTime");
if(
    isFirstTime === undefined ||
    isFirstTime === null ||
    isFirstTime === "true"
){
    cookies.set("isFirstTime", "false", 365)
    //sessionStorage.setItem("isFirstTime", "false");
    window.location.href = CURR_BASE_DIR + "app/sections/firstLogin/index.html";
}

// Theme management
function setTheme(isDark) {
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
}

// Check initial theme preference
if (window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkModeMediaQuery.matches);
    
    // Listen for theme changes
    darkModeMediaQuery.addEventListener('change', (e) => {
        setTheme(e.matches);
    });
}
