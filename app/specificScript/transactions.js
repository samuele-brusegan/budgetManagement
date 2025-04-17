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
            // traList.innerHTML += `
            // <div class="transaction-card ${(transaction._value < 0 ? "expense" : "income")}">
            //     <div>
            //         <h3 class="transaction-title">${transaction.name}</h3>
            //         <p class="transaction-subtitle">${transaction.category}</p>
            //     </div>
            //     <span class="transaction-amount">${transaction.value}</span>
            // </div>`;
            traList.innerHTML += `
            <div class="swiper w-100 transaction-card ${(transaction._value < 0 ? "expense" : "income")}" style="padding: 12px;">
                <div class="swiper-wrapper d-flex">
                    <div class="swiper-slide transaction-card">
                        <div>
                            <h3 class="transaction-title">${transaction.name}</h3>
                            <p class="transaction-subtitle">${transaction.category}</p>
                        </div>
                        <span class="transaction-amount">${transaction.value}</span>
                    </div>
                    <div class="swiper-slide h-auto" style="position: relative;">
                        <div class="delete-btn-mask"></div>
                        <div class="delete-btn d-flex justify-content-center align-items-center" uid="${transaction.id}">Elimina</div>
                    </div>
                </div>
            </div>`;
        });
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", () => {
                let uid = button.getAttribute("uid")
                //Get transaction
                Ctrl.getCurrAccount().remTransactionById(uid)
                showTransactions()
            });
        });
        traList.style.marginBottom = "10vh"
    }
    let swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
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
