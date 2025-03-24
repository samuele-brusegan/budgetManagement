import {Conto} from "./Conto.js";
import {Category} from "./Category.js";

const fileName = "data"
export function save(){
    localStorage.setItem(fileName+"_accountList", JSON.stringify(Conto.accountList));
    localStorage.setItem(fileName+"_categories",  JSON.stringify(Category.categoryList));
}
export function load(){
    if(localStorage.getItem(fileName+"_accountList") !== "{}") {
        let accountListJSON = JSON.parse(localStorage.getItem(fileName+"_accountList"));
        accountListJSON?.forEach((elem) => {
            new Conto(
                elem["_name"],
                elem["_value"],
                elem["_currency"],
                elem["_transactionList"]
            );
        });
    }
    
    
    Category.categoryList = JSON.parse(localStorage.getItem(fileName+"_categories"));
}
export function warn_deleteAll(){
    localStorage.setItem(fileName+"_accountList", "{}");
    localStorage.setItem(fileName+"_categories",  "{}");
}