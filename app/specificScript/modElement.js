import * as Ctrl from "../../controllers/Controller.js"
import {Item} from "../../models/Item.js"

let newOrModify = "new";
let qt = 0;
let qtDisplay = document.querySelector(".quantity-counter");
let qtInc = document.querySelectorAll(".quantity-btn")[0];
let qtDec = document.querySelectorAll(".quantity-btn")[1];

let name = document.getElementById("name");
let descr = document.getElementById("descr");

let done = document.querySelector(".done-btn");

//Loading data
let issuingId = getCookie("prodId")
console.log(issuingId, "issuingId")
if(issuingId !== "-1"){
    Ctrl.getCurrAccount().inventory.forEach(prod => {
        if(prod.id == issuingId){
            console.log(prod)
            name.value = prod._name;
            qtDisplay.value = prod._quantity;
            qt = prod._quantity;
            descr.value = prod._description;
        }
    })
    newOrModify = "modify";
    setCookie("prodId", "", 0);
}


qtInc.addEventListener("click", () => {
    qtDisplay.value = ++qt;
});
qtDec.addEventListener("click", () => {
    qtDisplay.value = --qt;
});
qtDisplay.addEventListener("change", () => {
    qt = parseInt(qtDisplay.value);
})

done.addEventListener("click", () => {
    if(newOrModify === "new") {
        let item = new Item(name.value, qt, null, descr.value);
        Ctrl.getCurrAccount().addItem(item)
    } else {
        Ctrl.getCurrAccount().inventory.forEach(prod => {
            console.log(prod.id, issuingId)
            if(prod.id == issuingId){
                console.log(prod)
                prod.modify(name.value, qt, null ,descr.value);
            }
            console.log(prod)
        })
    }
    // navigateTo("inventory")
});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "-1";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

