import * as Controller from "../controllers/Controller.js";
import * as ContoUI from "./ContoUI.js";
import {showConto} from "./ContoUI.js";

export * from "./ContoUI.js";


// ---------------------------- View -> Controller ----------------------------

let newTransaction = document.getElementById("newTransaction");
let newAccount = document.getElementById("newAccount");

newAccount.addEventListener("click", () => {
    let v0 = document.getElementById("name");
    let v1 = document.getElementById("startCash");
    let v2 = document.getElementById("currency");
    Controller.addConto(v0.value, v1.value, v2.value);
});
newTransaction.addEventListener("click", () => {
    let value = document.getElementById("value");
    let type = document.getElementById("category");
    let date = document.getElementById("date");
    Controller.createTransaction(value.value, type.value, date.value);
    ContoUI.showConto(Controller.getCurrAccount(), "conto");
});


// ---------------------------- View <- Controller ----------------------------

export function updateAccountList(accounts, currentAccount) {
    let out = "";
    accounts.forEach((account, i) => {
        out += "<div class='btn "+((account.id === currentAccount.id)?"btn-primary":"btn-secondary")+" m-3 accountAddBtn' uid='"+i+"'>"+account.name+"</div>";
        out += "<div class='btn btn-danger m-3 accountRemBtn' uid='"+i+"'>Remove "+account.name+"</div>";
        out += "<br/>"
        Controller.saveData()
    });
    document.getElementById("accountSelector").innerHTML = out;
    document.querySelectorAll(".accountAddBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            let id = btn.getAttribute("uid");
            Controller.setCurrAccount(accounts[id]);
        });
    });
    document.querySelectorAll(".accountRemBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            let id = btn.getAttribute("uid");
            Controller.remConto(accounts[id].id);
        });
    });
    showConto(currentAccount)
}

// ------------------------------- View -> DOM --------------------------------

const showIdsArr = ["showAddAcc", "showAddTra", "showAddCat", "showAddAcl"     ];
const isShownArr = [    true    ,    false    ,    false    ,     false        ];
const displayArr = ["displayAcc", "displayTra", "displayCat", "accountSelector"];

function setupToggler(index) {
    let showAdd = document.getElementById(showIdsArr[index]);
    let isShown =  isShownArr[index];
    let display = document.getElementById(displayArr[index]);
    display.hidden = !isShown;
    
    showAdd.addEventListener("click", () => {
        display.hidden = (isShown); isShown = !isShown;
    });
}

for (let i = 0; i < displayArr.length; i++) {
    setupToggler(i);
}

// ------------------------------- View <- DOM --------------------------------
document.getElementById("deleteAll").addEventListener("click", () => {
    Controller.delData()
});

let isEditable = false;
document.getElementById("renameAccount").addEventListener("click", () => {
    function replace(id, newTagName) {
        let label = document.getElementById(id);
        let textBox = document.createElement(newTagName);
        let oldValue = label.value ?? label.innerText;
        let index;
        
        // Copy the children
        while (label.firstChild) {
            textBox.appendChild(label.firstChild); // *Moves* the child
        }
        
        // Copy the attributes
        for (index = label.attributes.length - 1; index >= 0; --index) {
            textBox.attributes.setNamedItem(label.attributes[index].cloneNode());
        }
        
        // Replace it
        label.parentNode.replaceChild(textBox, label);
        textBox.value = oldValue;
        return textBox;
    }
    
    if(!isEditable) {
        let textBox = replace("contoHead", "input");
        let conto = Controller.getCurrAccount();
        console.log(conto)
        conto.name = textBox.value;
        console.log("Now showning ", conto)
        showConto(conto);
    } else {
        let newNameObj = replace("contoHead", "h5")
        let conto = Controller.getCurrAccount();
        conto.name = newNameObj.value;
        console.log("Now showning ", conto)
        showConto(conto)
    }
    isEditable = !isEditable;
});
