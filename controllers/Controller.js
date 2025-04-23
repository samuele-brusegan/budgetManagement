import {Transaction} from "../models/Transaction.js";
import {Conto} from "../models/Conto.js";
// import * as UI from "../view/ui.js";
import * as Memory from "../models/memory.js";
import {Category} from "../models/Category.js";
import {PaymentOptions} from "../models/PaymentOptions.js";

const nullAccount = new Conto("__none__", -1, "(-)"); // Conto di default per quando non ci sono conti
let currentAccount; // Conto corrente selezionato

initMemory() // Inizializza la memoria

//DEBUG: if(false){ Conto.accountList = [new Conto("Acc0"), new Conto("Acc1"), new Conto("Acc2"), new Conto("Acc3")]; currentAccount = Conto.accountList[0]; }

/**
 * Crea una nuova transazione e la aggiunge al conto corrente.
 * @param {string} name - Il nome della transazione.
 * @param {number} value - Il valore della transazione.
 * @param category
 * @param {string} type - Il tipo della transazione.
 * @param {string} date - La data della transazione.
 * @param {string} hour - L'ora della transazione.
 * @param {string} descr - La descrizione della transazione.
 * @param {string} status - Lo stato della transazione.
 */
export function createTransaction(name, value, category, date, hour, descr, status, type) {
    let transaction = new Transaction(name, value, category, date, hour, descr, status, type); // Crea una nuova transazione
    currentAccount.addTransaction(transaction); // Aggiunge la transazione al conto corrente
}

/**
 * Aggiunge un nuovo conto alla lista dei conti.
 * @param {string} name - Il nome del conto.
 * @param {number} value - Il saldo iniziale del conto.
 * @param {string} currency - La valuta del conto.
 */
export function addConto(name, value, currency){
    setCurrAccount(new Conto(name, value, currency)); // Crea un nuovo conto
}

/**
 * Rimuove un conto dalla lista dei conti.
 * @param {number} id - L'ID del conto da rimuovere.
 */
export function remConto(id){
    Conto.accountList.forEach((account, i) => { // Cerca il conto da rimuovere
        if(account.id === id) Conto.accountList.splice(i, 1); // Rimuove il conto dalla lista
    });
    
    setCurrAccount((Conto.accountList.length > 0)? Conto.accountList[0]: nullAccount) // Imposta il conto corrente al primo conto della lista o al conto di default
}

/**
 * Restituisce il conto corrente.
 * @returns {Conto} Il conto corrente.
 */
export function getCurrAccount(){
    return currentAccount;
}

/**
 * Imposta il conto corrente.
 * @param {Conto} account - Il nuovo conto corrente.
 */
export function setCurrAccount(account){
    currentAccount = account; // Imposta il conto corrente
    sessionStorage.setItem("currentAccountID", currentAccount.id)
}
export function setCurrAccountById(id){
    let accounts = getAccountList()
    console.log(accounts)
    let account = accounts.find( function (account) { return (account.id === parseInt(id)) });
    if (account !== undefined) {
        setCurrAccount(account);
    } else {
        alert("Account not found!")
    }
}

export function getCategoryList() {
    return Category.categoryList;
}
export function getAccountList() {
    return Conto.accountList;
}

// ----------------------------------- MEMORY MANAGEMENT ----------------------------------- //

/**
 * Salva i dati nella memoria persistente.
 */
export function saveData(){
    Memory.save() // Salva i dati
}

/**
 * Carica i dati dalla memoria persistente.
 */
export function loadData(){
    Memory.load() // Carica i dati
    let currID = sessionStorage.getItem("currentAccountID");
    
    if(currID !== "undefined" && currID !== "-101"){
        console.log("AAA")
        console.log(currID)
        setCurrAccountById(currID)
    } else {
        console.log("BBB")
        // Imposta il conto corrente al primo conto della lista o al conto di default
        setCurrAccount(currentAccount ?? Conto.accountList[0] ?? nullAccount);
        sessionStorage.setItem("currentAccountID", currentAccount.id)
    }
}

/**
 * Elimina tutti i dati dalla memoria persistente.
 */
export function delData() {
    Memory.warn_deleteAll(); // Elimina tutti i dati
    loadData() // Ricarica i dati (che saranno vuoti)
}

// noinspection JSValidateJSDoc,JSClosureCompilerSyntax
/**
 * Carica i dati da un file JSON e li aggiunge a una lista.
 * @param {string} path - Il percorso del file JSON.
 * @param {Array} list - La lista a cui aggiungere i dati.
 */
function loadFromCateg(path, list) {
    console.log("Loading from JSON")
    fetch(path) // Usa il percorso relativo al file JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Se la risposta non è ok, lancia un errore
            }
            return response.json(); // Converte la risposta in JSON
        })
        .then(data => {
            data.forEach((obj) => {
                let newObj = new Category(obj.name, obj.description, obj._parentCategoryID); // Crea un nuovo oggetto della classe specificata
                // list.push(newObj) // Aggiunge l'oggetto alla lista
            });
            //saveData() // Salva i dati nella memoria persistente
        })
        .catch(error => {
            console.error('Errore durante il caricamento del file JSON:', error);
        });
}

/**
 * Inizializza la memoria caricando i dati dai file JSON.
 */
function initMemory() {
    loadData()
    //le istruzioni qui sotto appendono le categorie di default alla lista di categorie
    if(localStorage.getItem("isDefaultLoaded") !== "true"){
        localStorage.setItem("isDefaultLoaded", "true");
        loadFromCateg("../models/defaultData/categories.json", Category.categoryList);
        // loadFromPayOp("../models/defaultData/payOptions.json", PaymentOptions.optionList);
    }
}