import {Conto} from "./Conto.js";
import {Category} from "./Category.js";
import * as Controller from "../controllers/Controller.js";

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
        if(Conto.accountList.length === 0){
            Controller.setCurrAccount(new Conto("Account", 0, '$'))
        }
    }
    
    
    Category.categoryList = JSON.parse(localStorage.getItem(fileName+"_categories"));
}
export function warn_deleteAll(){
    console.log("DELETED!")
    localStorage.setItem(fileName+"_accountList", "{}");
    localStorage.setItem(fileName+"_categories",  "{}");
}