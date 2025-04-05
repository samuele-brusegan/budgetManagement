// const pageName = window.location.href.split("/")[window.location.href.split("/").length - 1].split(".")[0]
const topbar = document.getElementById("topbar")
topbar.className = "topbar-div"
topbar.innerHTML = "<h1 class=\"page-title\">"+pageName+"</h1>"
