import * as Ctrl from "../../controllers/Controller.js";

showTransactions()

export function showTransactions(){
    let currentAccount = Ctrl.getCurrAccount()
    if(currentAccount) {
        let transactions = currentAccount.transactions;
        console.log("Showing transactions:", currentAccount, transactions)
        let traList = document.getElementById("transactions-list");
        traList.innerHTML = "";
        transactions.forEach((transaction, i) => {
            let transactionCard = document.createElement("div");
            transactionCard.className = "transaction-card " + (transaction._value < 0 ? "expense" : "income");
            let innerDiv = document.createElement("div");
            
            let title = document.createElement("h3");
            title.className = "transaction-title";
            title.innerText = transaction.name;
            
            let subtitle = document.createElement("p");
            subtitle.className = "transaction-subtitle";
            subtitle.innerText = transaction.category;
            
            innerDiv.appendChild(title);
            innerDiv.appendChild(subtitle);
            
            let amount = document.createElement("span");
            amount.className = "transaction-amount";
            amount.innerText = transaction.value;
            transactionCard.appendChild(innerDiv);
            transactionCard.appendChild(amount);
            traList.appendChild(transactionCard);
            // console.log(transactions.length)
        });
        traList.style.marginBottom = "10vh"
    }
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    addBtn.style.rotate === "45deg" ? addBtn.style.rotate = "0deg" : addBtn.style.rotate = "45deg"
    // console.log(addBtn.style.rotate)
});
let isShown = false;
document.getElementById("addBtn").addEventListener("click", () => {
    document.getElementById("add-container").hidden = isShown
    isShown = !isShown
});
document.getElementById("newTransactionBtn").addEventListener("click", () => {
    navigateTo("new-transaction")
});
