let arr = window.location.href.split("/");
let pageName = arr[arr.length - 1].split(".")[0]
/*document.getElementById("lowerNavbar").innerHTML = "<!-- Bottom Navigation -->\n" +
    "            <nav class='bottom-nav'>\n" +
    "                <a href='#' class='nav-item "+(pageName === "index" ? "active" : "")+"' onclick='navigateTo(\"index\")'>\n" +
     +
    "                    <span>Home</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item " + (pageName === "transaction" ? "active" : "") + "' onclick='navigateTo(\"transaction\")'>\n" +
    "<svg class='nav-icon' viewBox='0 0 24 24'>\n\t<rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>\n\t<path d='M16.36 1<line x1='8' y1='21' x2='16' y2='21'></line>\n\t<line x1='12' y1='17' x2='12' y2='21'></line>\n</svg>\n"
    "                    <span>Transazioni</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item add-btn " + (pageName === "modify-element" ? "active" : "") + "' onclick='navigateTo(\"modify-element\")'>\n" +
    "                    <div class='add-icon'>+</div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item "+(pageName === "settings" ? "active" : "")+"' onclick='navigateTo(\"settings\")'>\n" +
    "                    <span>Impostazioni</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href='#' class='nav-item "+(pageName === "inventory" ? "active" : "")+"' onclick='navigateTo(\"inventory\")'>\n" +
    "                    <img src='../assets/icons/boxes.svg' alt='Inventory' style='height: 20px; width: 20px; filter: invert(1);'/>\n"+
    "                    <span>Inventory</span>\n" +
    "                </a>\n" +
    "            </nav>";*/
const data = [
    {"page":"index", "alt":"Home", "title":"Home", "svg":"<svg class='nav-icon' viewBox='0 0 24 24'>\n\t<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>\n\t<polyline points='9 22 9 12 15 12 15 22'></polyline>\n</svg>\n"},
    {"page":"transaction", "alt":"Transazioni", "title":"Transazioni", "svg": "<svg class=\"nav-icon\" viewBox=\"0 0 24 24\">\n<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect>\n<line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line>\n<line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>\n</svg>"},
    {"page":"modify-element", "alt":"Aggiungi", "title":"Aggiungi"},
    {"page":"settings", "alt":"Impostazioni", "title":"Impostazioni", "svg":"<svg class='nav-icon' viewBox='0 0 24 24'>\n\t<circle cx='12' cy='12' r='3'></circle>\n\t<path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>\n</svg>"},
    {"page":"inventory", "alt":"Inventory", "title":"Inventory"}
];
const lowerNavbar = document.getElementById("lowerNavbar")
lowerNavbar.innerHTML = "<nav class='bottom-nav'></nav>"
const nav = document.querySelector(".bottom-nav")

data.forEach((item) => {
    const a = document.createElement("a");
    a.href = "#";
    a.className = "nav-item "+(pageName === item.page ? "active" : "")
    a.onclick = () => {navigateTo(item.page)};
    if(item.page === "modify-element"){
        const div = document.createElement("div");
        div.className = "add-icon";
        div.innerHTML = "+";
        a.appendChild(div);
    } else {
        a.innerHTML = item.svg;
        const span = document.createElement("span");
        span.innerText = item.title;
        a.appendChild(span);
    }
    nav.appendChild(a);
});

// Navigation function
function navigateTo(pageId) {
    window.location.href = pageId + ".html";
}