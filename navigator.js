const BASE_DIR = "/samuele/stockFlow/";
const BASE_DIR_LOCAL = "/js/andrew/budgetManagement/";

let CURR_BASE_DIR;

if(window.location.href.includes(BASE_DIR)) {
    CURR_BASE_DIR = BASE_DIR;
} else {
    CURR_BASE_DIR = BASE_DIR_LOCAL;
}

const pageIds = {
    "feedback":         "app/feedback.html",
    "index":            "app/index.html",
    "inventory":        "app/inventory.html",
    "license":          "app/license.html",
    "modify-element":   "app/modify-element.html",
    "new-transaction":  "app/new-transaction.html",
    "notification":     "app/notification.html",
    "settings":         "app/settings.html",
    "transaction":      "app/transaction.html",
    
    "set/devInfo":      "app/sections/settings/developer-info.html",
    "set/general":      "app/sections/settings/general.html",
    "set/info":         "app/sections/settings/info.html",
    
    "debug":            "app/debug/",
};


function navigateTo(pageId) {
    console.log("AAA")
    let documentPath = pageIds[pageId];
    window.location.href = CURR_BASE_DIR+documentPath;
}