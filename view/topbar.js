// const pageName = window.location.href.split("/")[window.location.href.split("/").length - 1].split(".")[0]
const topbar = document.getElementById("topbar")
topbar.className = "topbar-div justify-content-between"
let title = document.createElement("h1");
title.className = "page-title";
title.innerText = pageName;
topbar.appendChild(title)

let icons = [
    "<img id='notification-icon' class='nav-icon me-1' src='../assets/icons/notification.svg' style='filter: invert(1)' alt='Notification'>",
    "<svg id='settings-icon' class='nav-icon' viewBox='0 0 24 24'>\n\t<circle cx='12' cy='12' r='3'></circle>\n\t<path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>\n</svg>"
]
let rigthDiv = document.createElement("div")
rigthDiv.innerHTML += icons[0] //TODO: implement notification with/without badge
rigthDiv.innerHTML += icons[1]
topbar.appendChild(rigthDiv)

document.getElementById('notification-icon').addEventListener("click", () => {
    navigateTo("notification")
});
document.getElementById('settings-icon').addEventListener("click", () => {
    navigateTo("settings")
});