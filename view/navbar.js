let arr = window.location.href.split("/");
let pageName = arr[arr.length - 1].split(".")[0]
document.getElementById("lowerNavbar").innerHTML = "<!-- Bottom Navigation -->\n" +
    "            <nav class='bottom-nav'>\n" +
    "                <a href='#' class='nav-item "+(pageName === "index" ? "active" : "")+"' onclick='navigateTo(\"index\")'>\n" +
    "                    <svg class='nav-icon' viewBox='0 0 24 24'>\n" +
    "                        <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>\n" +
    "                        <polyline points='9 22 9 12 15 12 15 22'></polyline>\n" +
    "                    </svg>\n" +
    "                    <span>Home</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item " + (pageName === "transaction" ? "active" : "") + "' onclick='navigateTo(\"transaction\")'>\n" +
    "                    <svg class='nav-icon' viewBox='0 0 24 24'>\n" +
    "                        <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>\n" +
    "                        <line x1='8' y1='21' x2='16' y2='21'></line>\n" +
    "                        <line x1='12' y1='17' x2='12' y2='21'></line>\n" +
    "                    </svg>\n" +
    "                    <span>Transazioni</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item add-btn " + (pageName === "modify-element" ? "active" : "") + "' onclick='navigateTo(\"modify-element\")'>\n" +
    "                    <div class='add-icon'>+</div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item "+(pageName === "settings" ? "active" : "")+"' onclick='navigateTo(\"settings\")'>\n" +
    "                    <svg class='nav-icon' viewBox='0 0 24 24'>\n" +
    "                        <circle cx='12' cy='12' r='3'></circle>\n" +
    "                        <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>\n" +
    "                    </svg>\n" +
    "                    <span>Impostazioni</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item "+(pageName === "developer-info" ? "active" : "")+"' onclick='navigateTo(\"developer-info\")'>\n" +
    "                    <svg class='nav-icon' viewBox='0 0 24 24'>\n" +
    "                        <circle cx='12' cy='12' r='10'></circle>\n" +
    "                        <line x1='12' y1='16' x2='12' y2='12'></line>\n" +
    "                        <line x1='12' y1='8' x2='12.01' y2='8'></line>\n" +
    "                    </svg>\n" +
    "                    <span>Info</span>\n" +
    "                </a>\n" +
    "            </nav>";

// Navigation function
function navigateTo(pageId) {
    window.location.href = pageId + ".html";
}