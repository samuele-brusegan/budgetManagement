import * as Controller from "../controllers/Controller.js";
export * from "./ContoUI.js";

// ---------------------------- View -> Controller ----------------------------

let conto = Controller.getCurrAccount();

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
    let type = document.getElementById("type");
    let date = document.getElementById("date");
    Controller.createTransaction(value.value, type.value, date.value);
    conto.showConto("conto");
});


// ---------------------------- View <- Controller ----------------------------

/*
 * Random text
 * random Text
 * @#@]!$*§&$%
 */

// ------------------------------- View -> DOM --------------------------------

let showAddAcc = document.getElementById("showAddAcc"); let accIsShown =  true; let accDisplay = document.getElementById("displayAcc");
let showAddTra = document.getElementById("showAddTra"); let traIsShown = false; let traDisplay = document.getElementById("displayTra");

showAddAcc.addEventListener("click", () => {
    accDisplay.hidden = (accIsShown); accIsShown = !accIsShown;
});
showAddTra.addEventListener("click", () => {
    traDisplay.hidden = (traIsShown); traIsShown = !traIsShown;
});

// ----------------------------------------------------------------------------