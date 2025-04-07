import {Conto} from "./Conto.js";
import {Category} from "./Category.js";

const fileName = "data"

/**
 * Funzione per salvare i dati nella memoria locale.
 */
export function save(){
    // console.log("SAVE")
    let jsonStringAccList = JSON.stringify(Conto.accountList, null, 2);
    localStorage.setItem(fileName+"_accountList", jsonStringAccList);
    localStorage.setItem(fileName+"_categories",  JSON.stringify(Category.categoryList));
}
/**
 * Funzione per caricare i dati dalla memoria locale.
 */
export function load(){
    // console.log("LOAD")
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
        });
        if(Conto.accountList.length === 0){
            console.log("Adding new default account")
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