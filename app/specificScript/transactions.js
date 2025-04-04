import * as Ctrl from "../../controllers/Controller.js";

showTransactions()

function showTransactions(){
    let currentAccount = Ctrl.getCurrAccount()
    let transactions = currentAccount.transactions;
    console.log(transactions)
    const traList = document.getElementById("transactions-list");
    traList.innerHTML = "";
    transactions.forEach((transaction) => {
        const transactionCard = document.createElement("div");
        transactionCard.className = "transaction-card "+(transaction._value < 0 ? "expense" : "income");
        const innerDiv = document.createElement("div");
        const title = document.createElement("h3");
        title.className = "transaction-title";
        title.innerText = transaction.name; //TODO: Add attr name
        // title.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        const subtitle = document.createElement("p");
        subtitle.className = "transaction-subtitle";
        subtitle.innerText = transaction.category;
        innerDiv.appendChild(title);
        innerDiv.appendChild(subtitle);
        const amount = document.createElement("span");
        amount.className = "transaction-amount";
        console.log(transaction._value)
        amount.innerText = transaction.value+"";
        transactionCard.appendChild(innerDiv);
        transactionCard.appendChild(amount);
        traList.appendChild(transactionCard);
    });
}
