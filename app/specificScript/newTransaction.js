import * as Ctrl from "../../controllers/Controller.js"
import {Transaction} from "../../models/Transaction.js"

let backBtn = document.getElementById("backFromNewTr");
let saveBtn = document.getElementById("saveTransaction");

window.addEventListener("load", () => {
    console.log("dxfcgvbhnjmklhfpaurpihavpirnhpuiahfiuh")
    showCategories()
});

backBtn.addEventListener("click", function () {
    navigateTo("transaction")
});

saveBtn.addEventListener("click", function () {
    let arr = getInfo()
    //value=0, type='', date, name="Default_Transaction_Name"
    console.log(arr["type"])
    Ctrl.createTransaction(arr["name"], arr["value"], arr["category"], arr["date"], arr["hour"], arr["descr"], arr["status"], arr["type"])
    navigateTo("transaction")
});

function getInfo(){
    let arr = []
    //arr[1] = document.getElementById().value //Tags
    arr["name"]     = document.getElementById("title").value //Name
    arr["value"]    = parseInt(document.getElementById("value").value) //Value
    arr["type"]     = document.getElementById("type").value //Description
    console.log("arr[type]", arr["type"])
    arr["date"]     = document.getElementById("data").value //Date
    arr["hour"]     = document.getElementById("ora").value //Description
    arr["descr"]    = document.getElementById("descr").value //Description
    arr["status"]   = document.getElementById("status").value //Description
    //Cos'è l'aliquota fiscale?
    return arr;
}

function showCategories(){
    let categories = Ctrl.getCategoryList();
    console.log("aaa", categories)
    let categoryList = document.getElementById("categoryList")
    categoryList.innerHTML = ""
    categories.forEach(category => {
        categoryList.innerHTML += `<div class="categoryItem">${category.name}</div>`
    });
    if (categoryList.innerHTML === "") {
        categoryList.innerHTML += "Nessuna Categoria!"
    }
}

function navigateTo(pageId) {
    window.location.href = pageId + ".html";
}
