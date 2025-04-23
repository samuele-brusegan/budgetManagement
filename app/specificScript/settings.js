import * as Ctrl from "../../controllers/Controller.js"
import * as DevCtrl from "../../controllers/debugCtrl.js";

let accList = Ctrl.getAccountList()
let domList = document.getElementById("contoList")
createAccountBtn()

let container = document.querySelector(".settings-list");
let contHtml = container.innerHTML;
isDevShow()

function createAccountBtn(){
    domList.innerHTML = ""
    accList.forEach(acc => {
        domList.innerHTML += `
            <div class="setting-item" uid="${acc.id}">
                <span>${acc.name}</span>
                <span class="chevron"><img src="${CURR_BASE_DIR}/assets/icons/chevron.svg" alt="Chevron"></span>
            </div>`;
    });
    
    let accButtons = document.querySelectorAll("[uid]")
    accButtons.forEach(btn => {

        btn.addEventListener("click", () => {
            Ctrl.setCurrAccountById(btn.getAttribute("uid"))
            navigateTo("index")
        });
    })
}


function isDevShow() {
    console.log("!!!!")
    let dev = DevCtrl.getDev();
    console.log(dev)
    
    document.getElementById("devOptions").hidden = !dev;
    document.querySelector("#devOptions>span>img").src = `${CURR_BASE_DIR}/assets/icons/chevron.svg`;
}

export function changeDev(val) {
    if (val) {
        console.log("Dev mode enabled");
    } else {
        console.log("Dev mode disabled");
    }
    DevCtrl.setDev(val);
    isDevShow();
}

// Add this code to handle the click event
document.addEventListener('DOMContentLoaded', () => {
    const devInfoParagraph = document.querySelector('.unselectable');
    if (devInfoParagraph) {
        let clickCount = 0;
        let dev = DevCtrl.getDev();
        let bakContent = devInfoParagraph.innerHTML;
        
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
                dev = DevCtrl.getDev(); // Evita allucinazioni non necessario
            }
            if (clickCount >= 2) {
                devInfoParagraph.innerHTML = (7 - clickCount) + ' clicks to ' + (dev ? 'disable' : 'enable') + ' Developer mode';
            } else {
                devInfoParagraph.innerHTML = bakContent;
            }
        });
    }
});
