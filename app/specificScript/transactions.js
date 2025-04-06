import * as Ctrl from "../../controllers/Controller.js";

showTransactions()

function showTransactions(){
    let currentAccount = Ctrl.getCurrAccount()
    let transactions = currentAccount.transactions;
    console.log(transactions)
    let traList = document.getElementById("transactions-list");
    traList.innerHTML = "";
    transactions.forEach((transaction, i) => {
        let transactionCard = document.createElement("div");
        transactionCard.className = "transaction-card "+(transaction._value < 0 ? "expense" : "income");
            let innerDiv = document.createElement("div");
            
                let title = document.createElement("h3");
                title.className = "transaction-title";
                title.innerText = transaction.name; //TODO: Add attr name
                
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
        console.log(transactions.length)
    });
    traList.style.marginBottom = "10vh"
}
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    addBtn.style.rotate = ((addBtn.style.rotate==='0deg')?45:0)+'deg';
    console.log(addBtn.style.rotate)
});
