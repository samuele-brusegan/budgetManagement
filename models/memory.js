import {Conto} from "./Conto.js";
import {Category} from "./Category.js";
import {Transaction} from "./Transaction.js";

const fileName = "data"

/**
 * Funzione per salvare i dati nella memoria locale.
 */
export function save(){
    let jsonStringAccList = JSON.stringify(Conto.accountList, null, 2);
    
    //Importing ID matrixes
    // localStorage.setItem(fileName+"_accountCtr", Conto.accountCounter)
    // localStorage.setItem(fileName+"_categoryCtr", Category.categoryCounter)
    // localStorage.setItem(fileName+"_transactionCtr", Transaction.transactionCounter)
    // localStorage.setItem(fileName+"_objectCtr", Object.objCounter)
    
    //Importing Objects
    localStorage.setItem(fileName+"_accountList", jsonStringAccList);
    localStorage.setItem(fileName+"_categories",  JSON.stringify(Category.categoryList));
    
}
/**
 * Funzione per caricare i dati dalla memoria locale.
 */
export function load(){
    let categoriesJSON = localStorage.getItem(fileName+"_categories")
    loadAccount()
    loadCategory(categoriesJSON)
}
function loadCategory(categoriesJSON){
    console.log("Loading categories")
    if(categoriesJSON !== "{}") {
        let categoryListJSON = JSON.parse(categoriesJSON);
        categoryListJSON?.forEach((elem) => {
            let newCaregory = new Category(elem._name, elem._description, elem?._parentCategoryID);
        });
    }
    // console.log(Category.categoryList)
}
function loadAccount() {
    if(localStorage.getItem(fileName+"_accountList") !== "{}") {
        let accountListJSON = JSON.parse(localStorage.getItem(fileName+"_accountList"));
        accountListJSON?.forEach((elem) => {
            let newAccount = new Conto(
                elem["_name"],
                elem["_value"],
                elem["_currency"],
            );
            // Convert transactions
            if (elem._transactionList) {
                newAccount.addManyTransactions(elem._transactionList)
            }
            if (elem._inventory) {
                newAccount.addManyItems(elem._inventory)
            }
        });
        if(Conto.accountList.length === 0){
            console.log("Adding new default account")
        }
    }
}
/**
 * Funzione per eliminare tutti i dati dalla memoria locale.
 */
export function warn_deleteAll(){
    console.log("DELETED!")
    localStorage.setItem(fileName+"_accountList", "{}");
    localStorage.setItem(fileName+"_categories",  "{}");
    localStorage.setItem("isDefaultLoaded", "false");
    
    Conto.accountList = [];
    Conto.accountCounter = 0;
    
    Category.categoryList = [];
    Category.categoryCounter = 0;
    
    Transaction.transactionList = [];
    Transaction.transactionCounter = 0;
    Object.objCounter = 0;
    
    sessionStorage.setItem("currentAccountID", undefined)
}