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
    "trnFilter":        "app/transactionFilter.html",
    
    "set/devInfo":      "app/sections/settings/developer-info.html",
    "set/general":      "app/sections/settings/general.html",
    "set/info":         "app/sections/settings/info.html",
    
    "privacyPolicy":    "app/sections/firstLogin/privacy-policy.html",
    "auth":             "app/sections/firstLogin/auth.html",
    
    "newConto":         "app/newConto.html",
    
    "debug":            "app/debug/",
};

/**
 * Navigates to a specified page by updating the browser's current location.<br>
 * <b>PAGE IDS:</b>
 * <table>
 *     <tr>
 *         <td>feedback</td>
 *         <td>app/feedback.html</td>
 *     </tr>
 *     <tr>
 *         <td>index</td>
 *         <td>app/index.html</td>
 *     </tr><tr>
 *         <td>inventory</td>
 *         <td>app/inventory.html</td>
 *     </tr><tr>
 *         <td>license</td>
 *         <td>app/license.html</td>
 *     </tr><tr>
 *         <td>modify-element</td>
 *         <td>app/modify-element.html</td>
 *     </tr><tr>
 *         <td>new-transaction</td>
 *         <td>app/new-transaction.html</td>
 *     </tr><tr>
 *         <td>notification</td>
 *         <td>app/notification.html</td>
 *     </tr><tr>
 *         <td>settings</td>
 *         <td>app/settings.html</td>
 *     </tr><tr>
 *         <td>transaction</td>
 *         <td>app/transaction.html</td>
 *     </tr><tr>
 *         <td>trnFilter</td>
 *         <td>app/transactionFilter.html</td>
 *     </tr><tr>
 *         <td>set/devInfo</td>
 *         <td>app/sections/settings/developer-info.html</td>
 *     </tr><tr>
 *         <td>set/general</td>
 *         <td>app/sections/settings/general.html</td>
 *     </tr><tr>
 *         <td>set/info</td>
 *         <td>app/sections/settings/info.html</td>
 *     </tr><tr>
 *         <td>privacyPolicy</td>
 *         <td>app/sections/firstLogin/privacy-policy.html</td>
 *     </tr><tr>
 *         <td>auth</td>
 *         <td>app/sections/firstLogin/auth.html</td>
 *     </tr><tr>
 *         <td>newConto</td>
 *         <td>app/newConto.html</td>
 *     </tr><tr>
 *         <td>debug</td>
 *         <td>app/debug/</td>
 *     </tr>
 * </table>
 * 
 * @param {string} pageId - The identifier of the page to navigate to. Must correspond to a valid key in the `pageIds` object.
 * @return {void} This function does not return a value.
 */
function navigateTo(pageId) {
    let documentPath = pageIds[pageId];
    window.location.href = CURR_BASE_DIR+documentPath;
}

const router = {
    navigateTo: navigateTo,
    pageIds: pageIds
}