import * as Memory from "./memory.js";

/**
 * Classe per rappresentare una transazione.
 */
export class Transaction {
    static transactionCounter = 0; // Contatore statico per generare ID univoci
    
    /**
     * Costruttore per la classe Transaction.
     * @param {number} [value=0] - Il valore della transazione (opzionale, default: 0).
     * @param {string} [type=''] - Il tipo/categoria della transazione (opzionale, default: '').
     * @param {string} date - La data della transazione.
     * @param name
     */
    constructor(value=0, type='', date, name="Default_Transaction_Name") {
        this._value = value; // Valore della transazione
        this._category = type; // Categoria della transazione
        this._date = date; // Data della transazione
        this._id = Transaction.transactionCounter; // ID univoco della transazione
        this._name = name; // Nome della transazione
        Transaction.transactionCounter++; // Incrementa il contatore per la prossima transazione
        //Memory.save(); // Salva i dati nella memoria persistente
    }
    
    /**
     * Modifica i dettagli della transazione.
     * @param {number} value - Il nuovo valore della transazione.
     * @param {string} type - Il nuovo tipo/categoria della transazione.
     * @param {string} date - La nuova data della transazione.
     * @param name
     */
    modifyTransaction(value, type, date, name) {
        this._category = type; // Aggiorna la categoria
        this._date = date; // Aggiorna la data
        this._value = value; // Aggiorna il valore
        this._name = name; // Aggiorna il nome
    }

    get value() {
        return this._value;
    }
    
    get category() {
        return this._category;
    }
    
    get date() {
        return this._date;
    }
    
    get name() {
        return this._name;
    }
    
    /**
     * Restituisce l'ID della transazione.
     * @returns {number} L'ID della transazione.
     */
    get id() {
        return this._id;
    }
}