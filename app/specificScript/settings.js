import * as Ctrl from "../../controllers/Controller.js"

let accList = Ctrl.getAccountList()
let domList = document.getElementById("contoList")
domList.innerHTML = ""
accList.forEach(acc => {
    domList.innerHTML += `
        <div class="setting-item" uid="${acc.id}">
            <span>${acc.name}</span>
            <span class="chevron"><img src="${CURR_BASE_DIR}/assets/icons/chevron.svg" alt="Chevron"></span>
        </div>`;
    let btn = document.querySelector(`[uid="${acc.id}"]`)
    console.log(btn)
    btn.addEventListener("click", () => {
        Ctrl.setCurrAccount(acc)
        navigateTo("home")
    });
});