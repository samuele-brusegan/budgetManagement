import * as Ctrl from "../../controllers/Controller.js";

// Ctrl.getCategoryList()
let accList = Ctrl.getAccountList()

accList.forEach((val) => {console.log(val)});

let totalIncome = 0;
let total = 0;
accList.forEach((value, i) => {
    value.transactions?.forEach((value) => {
        let item = value.value;
        total += item;
        if(item>0){
            totalIncome += item;
        }
    });
});
console.log(totalIncome, total)