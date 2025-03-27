import {Conto} from "./Conto.js";
import {Category} from "./Category.js";
import * as Controller from "../controllers/Controller.js";

const fileName = "data"

/**
 * Funzione per salvare i dati nella memoria locale.
 */
export function save(){
    localStorage.setItem(fileName+"_accountList", JSON.stringify(Conto.accountList));
    localStorage.setItem(fileName+"_categories",  JSON.stringify(Category.categoryList));
}
/**
 * Funzione per caricare i dati dalla memoria locale.
 */
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
        // console.log("LEN:", Conto.accountList)
        if(Conto.accountList.length === 0){
            console.log("Adding new default account")
            Controller.setCurrAccount(new Conto("Account", 0, '$'))
        }
    }
    
    
    
    Category.categoryList = JSON.parse(localStorage.getItem(fileName+"_categories"));
}
/**
 * Funzione per eliminare tutti i dati dalla memoria locale.
 */
export function warn_deleteAll(){
    console.log("DELETED!")
    localStorage.setItem(fileName+"_accountList", "{}");
    localStorage.setItem(fileName+"_categories",  "{}");
}

/*

import {Conto} from "./Conto.js";


export function save() {
    let data = {
        accounts: Conto.accountList, // Salva la lista dei conti
    };
    localStorage.setItem("data", JSON.stringify(data)); // Salva i dati in formato JSON
}


export function load() {
    let data = localStorage.getItem("data"); // Carica i dati dalla memoria locale
    if (data) { // Se ci sono dati
        data = JSON.parse(data); // Converte i dati da JSON a oggetto
        Conto.accountList.length = 0; // Svuota la lista dei conti
        data.accounts.forEach(account => { // Per ogni conto nei dati
            let newAccount = new Conto(account._name, account._value, account._currency); // Crea un nuovo conto
            newAccount._id = account._id; // Ripristina l'ID
            newAccount._transactions = account._transactions; // Ripristina le transazioni
        });
    }
}


export function warn_deleteAll() {
    localStorage.clear(); // Elimina tutti i dati
    Conto.accountList.length = 0; // Svuota la lista dei conti
}
*/