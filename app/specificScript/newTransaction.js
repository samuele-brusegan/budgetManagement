import * as Ctrl from "../../controllers/Controller.js"
import {Transaction} from "../../models/Transaction.js"

let backBtn = document.getElementById("backFromNewTr");

/*document.getElementById("backFromNewTr").addEventListener("click", function() {
    document.getElementById("descr").value = "Goto!";
});*/

backBtn.addEventListener("click", function () {
    let arr = getInfo()
                            //value=0, type='', date, name="Default_Transaction_Name"
    Ctrl.getCurrAccount().addTransaction(new Transaction(arr[0], arr[1], arr[2], arr[3]))
    
    document.getElementById("descr").value = "Goto!";
    window.location.href = "index.html";
});

function getInfo(){
    let arr = []
    arr[0] = document.getElementById("value").value //Value
    //arr[1] = document.getElementById().value //Tags
    arr[2] = document.getElementById("data").value //Date
    arr[3] = document.getElementById("title").value //Name
    arr[4] = document.getElementById("descr").value //Description
    arr[5] = document.getElementById("ora").value //Description
    //Cos'è l'aliquota fiscale?
    arr[6] = document.getElementById("type").value //Description
    arr[7] = document.getElementById("status").value //Description
    return arr;
}

