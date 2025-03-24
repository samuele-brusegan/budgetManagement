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

export function updateAccountList(accounts, currentAccount) {
    let out = "";
    accounts.forEach((account, i) => {
        out += "<div class='btn "+((account === currentAccount)?"btn-primary":"btn-secondary")+" m-3 accountBtn' uid='"+i+"'>"+account.name+"</div>";
    });
    document.querySelectorAll(".accountBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            let id = btn.getAttribute("uid");
            Controller.setCurrAccount(accounts[id]);
        })
    })
    document.getElementById("accountSelector").innerHTML = out;
}

// ------------------------------- View -> DOM --------------------------------

/*const idList = [
    {
        "id": 0,
        "showAdd":"showAddAcc",
        "isShown":true,
        "display": "displayAcc"
    },
    {
        "id": 1,
        "showAdd":"showAddTra",
        "isShown":false,
        "display": "displayTra"
    }
];

for (let i = 0; i < 2; i++) {
    let showAdd = document.getElementById(idList[i]["showAdd"]);
    let isShown = idList[i]["isShown"];
    let display = document.getElementById(idList[i]["display"]);

    function showHide (display, isShown, i) {
        console.log(i)
        display.hidden = (isShown); idList[i]["isShown"] = !isShown;
    }

    showAdd.addEventListener("click", () =>{
        showHide(display, isShown, idList[i]["id"]);
    });
}*/

let showAddAcc = document.getElementById("showAddAcc"); let accIsShown =  true; let accDisplay = document.getElementById("displayAcc");
let showAddTra = document.getElementById("showAddTra"); let traIsShown = false; let traDisplay = document.getElementById("displayTra");

showAddAcc.addEventListener("click", () => {
    accDisplay.hidden = (accIsShown); accIsShown = !accIsShown;
});
showAddTra.addEventListener("click", () => {
    traDisplay.hidden = (traIsShown); traIsShown = !traIsShown;
});

// ----------------------------------------------------------------------------