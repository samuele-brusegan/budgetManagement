import {Transaction} from "../models/Transaction.js";
import {Conto} from "../models/Conto.js";
import * as UI from "../view/ui.js";
import * as Memory from "../models/jsonManager.js";
import {Category} from "../models/Category.js";
import {PaymentOptions} from "../models/PaymentOptions.js";

const nullAccount = new Conto("__none__", -1, "(-)"); // Conto di default per quando non ci sono conti
let currentAccount; // Conto corrente selezionato

initMemory() // Inizializza la memoria

//TODO: rem test
// noinspection PointlessBooleanExpressionJS
if(false){
    // noinspection UnreachableCodeJS
    Conto.accountList = [new Conto("Acc0"), new Conto("Acc1"), new Conto("Acc2"), new Conto("Acc3")];
    currentAccount = Conto.accountList[0];
    UI.updateAccountList(Conto.accountList, currentAccount);
}

/**
 * Crea una nuova transazione e la aggiunge al conto corrente.
 * @param {number} value - Il valore della transazione.
 * @param {string} type - Il tipo della transazione.
 * @param {string} date - La data della transazione.
 */
export function createTransaction(value, type, date) {
    let transaction = new Transaction(value, type, date); // Crea una nuova transazione
    currentAccount.addTransaction(transaction); // Aggiunge la transazione al conto corrente
    UI.showConto(currentAccount); // Aggiorna la UI
}

/**
 * Aggiunge un nuovo conto alla lista dei conti.
 * @param {string} name - Il nome del conto.
 * @param {number} value - Il saldo iniziale del conto.
 * @param {string} currency - La valuta del conto.
 */
export function addConto(name, value, currency){
    currentAccount = new Conto(name, value, currency); // Crea un nuovo conto
    UI.updateAccountList(Conto.accountList, currentAccount); // Aggiorna la UI
}

/**
 * Rimuove un conto dalla lista dei conti.
 * @param {number} id - L'ID del conto da rimuovere.
 */
export function remConto(id){
    Conto.accountList.forEach((account, i) => { // Cerca il conto da rimuovere
        if(account.id === id) Conto.accountList.splice(i, 1); // Rimuove il conto dalla lista
    });
    currentAccount = (Conto.accountList.length > 0)? Conto.accountList[0]: nullAccount; // Imposta il conto corrente al primo conto della lista o al conto di default
    UI.updateAccountList(Conto.accountList, currentAccount); // Aggiorna la UI
}

/**
 * Restituisce il conto corrente.
 * @returns {Conto} Il conto corrente.
 */
export function getCurrAccount(){ return currentAccount; }

/**
 * Imposta il conto corrente.
 * @param {Conto} account - Il nuovo conto corrente.
 */
export function setCurrAccount(account){
    currentAccount = account; // Imposta il conto corrente
    UI.updateAccountList(Conto.accountList, currentAccount); // Aggiorna la UI
}

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
    currentAccount = currentAccount ?? Conto.accountList[0] ?? nullAccount; // Imposta il conto corrente al primo conto della lista o al conto di default
    UI.updateAccountList(Conto.accountList, currentAccount); // Aggiorna la UI
    UI.showConto(currentAccount); // Mostra il conto corrente
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
 * @param {class} Class - La classe degli oggetti da creare.
 */
function loadFromJSON(path, list, Class) {
    fetch(path) // Usa il percorso relativo al file JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Se la risposta non è ok, lancia un errore
            }
            return response.json(); // Converte la risposta in JSON
        })
        .then(data => {
            // Qui puoi usare i dati del JSON
            console.log("data", data)
            data.forEach(obj => { // Per ogni oggetto nel JSON
                let newObj = new Class(obj.name, obj.description, obj["parentCategoryID"]); // Crea un nuovo oggetto della classe specificata
                list.push(newObj) // Aggiunge l'oggetto alla lista
            });
            Memory.save() // Salva i dati nella memoria persistente
        })
        .catch(error => {
            console.error('Errore durante il caricamento del file JSON:', error);
        });
}

/**
 * Inizializza la memoria caricando i dati dai file JSON.
 */
function initMemory() {
    loadFromJSON("models/defaultData/categories.json", Category.categoryList, Category);
    loadFromJSON("models/defaultData/payOptions.json", PaymentOptions.optionList, PaymentOptions);
    loadData()
}