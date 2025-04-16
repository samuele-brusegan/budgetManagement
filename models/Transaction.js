import * as Memory from "./memory.js";

/**
 * Classe per rappresentare una transazione.
 */
export class Transaction {
    static transactionCounter = 0; // Contatore statico per generare ID univoci
    
    /**
     * Costruttore per la classe Transaction.
     * @param {string} [name="Default_Transaction_Name"] - Il nome della transazione.
     * @param {number} [value=0] - Il valore della transazione (opzionale, default: 0).
     * @param {string} [category=''] - Il tipo/categoria della transazione (opzionale, default: '').
     * @param {string} [date="-1/01/1900"] - La data della transazione.
     * @param {string} [hour='00:00'] - Ora della transazione.
     * @param {string} [descr=""] - Descrizione della transazione.
     * @param {string} [status="completed"] - Stato della transazione. (Puo' essere 'completed' o 'pending')
     * @param {string} [type] - Tipo della transazione. (Puo' essere 'entrata' o 'uscita')
     */
    // constructor(value=0, category='', date, name="Default_Transaction_Name") {
    constructor(name="Default_Transaction_Name", value=0, category='', date="-1/01/1900", hour='00:00', descr="", status="completed", type="entrata") {
        this._name = name;
        this._value = (type==="entrata")?value:-value;
        this._category = category;
        this._date = date;
        this._hour = hour;
        this._descr = descr;
        this._status = status;
        this._type = type;
        
        this._id = Transaction.transactionCounter;
        Transaction.transactionCounter++; // Incrementa il contatore per la prossima transazione
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

    get name() {
        return this._name;
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
    
    get hour() {
        return this._hour;
    }
    
    get descr() {
        return this._descr;
    }
    
    get status() {
        return this._status;
    }
    
    /**
     * Restituisce l'ID della transazione.
     * @returns {number} L'ID della transazione.
     */
    get id() {
        return this._id;
    }
}