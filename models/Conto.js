import * as Memory from "./memory.js";

/**
 * Classe per rappresentare un conto.
 */
export class Conto {
    static accountList = []; // Lista statica di tutti i conti
    static accountCounter = 0; // Contatore statico per generare ID univoci
    
    /**
     * Costruttore per la classe Conto.
     * @param {string} name - Il nome del conto.
     * @param {number} [value=0] - Il saldo iniziale del conto (opzionale, default: 0).
     * @param {string} [currency='€'] - La valuta del conto (opzionale, default: '€').
     */
    constructor(name, value=0, currency="€") {
        this._transactionList = [];
        this._name = name;
        this._value = parseInt(value);
        this._currency = currency;
        if(this._name !== "__none__") {
            this._id = Conto.accountCounter;
            Conto.accountCounter++;
            Conto.accountList.push(this);
            Memory.save()
        } else {
            this._id = -101;
        }
    }
    
    /**
     * Aggiunge una transazione al conto.
     * @param {Transaction} transaction - La transazione da aggiungere.
     */
    addTransaction(transaction) {
        this._transactionList.push(transaction); // Aggiunge la transazione alla lista
        Memory.save(); // Salva i dati nella memoria persistente
    }
    
    /**
     * Rimuove una transazione dal conto.
     * @param {Transaction} transaction - La transazione da rimuovere.
     */
    remTransaction(transaction){
        this._transactionList.forEach((trans, i) => {
            if(trans.id === transaction.id) this._transactionList.splice(i, 1);
        });
        Memory.save(); // Salva i dati nella memoria persistente
    }
    
    addManyTransactions(transactions){
        transactions.forEach((transaction) => {
            this._transactionList.push(transaction)
        });
        Memory.save(); // Salva i dati nella memoria persistente
    }
    
    /**
     * Restituisce il nome del conto.
     * @returns {string} Il nome del conto.
     */
    get name() {
        return this._name;
    }
    
    /**
     * Imposta il nome del conto.
     * @param {string} value - Il nuovo nome del conto.
     */
    set name(value) {
        this._name = value;
    }
    
    /**
     * Restituisce il saldo del conto.
     * @returns {number} Il saldo del conto.
     */
    get value() {
        return this._value;
    }
    
    /**
     * Imposta il saldo del conto.
     * @param {number} value - Il nuovo saldo del conto.
     */
    set value(value) {
        this._value = value;
    }
    
    /**
     * Restituisce la valuta del conto.
     * @returns {string} La valuta del conto.
     */
    get currency() {
        return this._currency;
    }
    
    /**
     * Imposta la valuta del conto.
     * @param {string} value - La nuova valuta del conto.
     */
    set currency(value) {
        this._currency = value;
    }
    
    /**
     * Restituisce la lista delle transazioni del conto.
     * @returns {Array<Transaction>} La lista delle transazioni.
     */
    get transactions() {
        return this._transactionList;
    }
    
    /**
     * Restituisce l'ID del conto.
     * @returns {number} L'ID del conto.
     */
    get id() {
        return this._id;
    }
}