import * as Ctrl from "../controllers/Controller.js"
import * as TransactionJS from "../app/specificScript/transactions.js"
updateAccountList()

function updateAccountList() {
    let accounts = Ctrl.getAccountList()
    
    let accountSelector = document.getElementById("account-selector")
    accountSelector.innerHTML = ""
            let openDropdown = document.createElement("div");
        openDropdown.className = "my-card dropdown-btn";
        openDropdown.id = "openDropdown";
            let div = document.createElement("div")
                let h2 = document.createElement("h2");
                h2.className = "account-title";
                h2.innerText = Ctrl.getCurrAccount().name;
                let p = document.createElement("p");
                p.className = "account-subtitle";
                p.innerText = Ctrl.getCurrAccount().currency;
            div.appendChild(h2);
            div.appendChild(p);
            let span = document.createElement("span");
            span.className = "dropdown-icon";
            span.innerText = "▼";
        openDropdown.appendChild(div);
        openDropdown.appendChild(span);
        let myDropdown = document.createElement("div");
        myDropdown.id = "myDropdown";
        myDropdown.className = "dropdown-content";
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Search..";
            input.id = "myInput";
            input.onkeyup = () => filterFunction();
        myDropdown.appendChild(input);
        accounts.forEach(account => {
            let div = document.createElement("div");
            div.className = "dropdown-element";
            div.innerText = account.name;
            div.setAttribute("uid", account.id);
            myDropdown.appendChild(div);
        });
    accountSelector.appendChild(openDropdown);
    accountSelector.appendChild(myDropdown);
    
    /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
    document.getElementById("openDropdown").addEventListener("click", () => {
        document.getElementById("myDropdown").classList.toggle("show");
    });
    
    function filterFunction() {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const div = document.getElementById("myDropdown");
        const a = div.getElementsByTagName("div");
        for (let i = 0; i < a.length; i++) {
            let txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }
    let accountBtns = document.getElementById("myDropdown").querySelectorAll("div.dropdown-element")
    accountBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let uid = btn.getAttribute("uid")
            console.log("uid:", uid)
            Ctrl.setCurrAccountById(uid)
            updateAccountList()
            TransactionJS.showTransactions();
        });
    });
}
