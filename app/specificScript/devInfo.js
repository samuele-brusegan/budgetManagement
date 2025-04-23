import * as Ctrl from "../../controllers/debugCtrl.js";
let container = document.querySelector("#general-settings-page>div");
let contHtml = container.innerHTML;

isDevShow()
function isDevShow() {
    console.log("!!!!")
    let dev = Ctrl.getDev();
    console.log(dev)
    if(dev) {
        console.log("a")
        container.innerHTML =` <a class='btn btn-light' onclick="navigateTo('debug')">!(You aren't a dev)</a>${contHtml}`;
    } else {
        console.log("b")
        container.innerHTML = contHtml;
    }
}


///////////////////////////////
// specificScript/devInfo.js
export function changeDev(val) {
    if (val) {
        console.log("Dev mode enabled");
        // ... other code for enabling dev mode ...
    } else {
        console.log("Dev mode disabled");
        // ... other code for disabling dev mode ...
    }
    Ctrl.setDev(val);
    isDevShow();
}

// Add this code to handle the click event
document.addEventListener('DOMContentLoaded', () => {
    console.log("!!!")
    const devInfoParagraph = document.querySelector('.unselectable');
    if (devInfoParagraph) {
        let clickCount = 0;
        let dev = Ctrl.getDev();
        devInfoParagraph.addEventListener('click', () => {
            console.log(++clickCount);
            if (clickCount >= 7) {
                if (!dev) {
                    alert('You are a Developer!');
                } else {
                    alert('You aren\'t a Developer!');
                }
                clickCount = 0;
                dev = !dev;
                isDevShow();
                changeDev(dev);
                dev = Ctrl.getDev(); // Evita allucinazioni non necessario
            }
            if (clickCount >= 2) {
                devInfoParagraph.textContent = "-B.P. " + (7 - clickCount) + ' clicks to ' + (dev ? 'disable' : 'enable') + ' Developer mode';
            }
        });
    }
});
