import * as Memory from "./jsonManager.js";

export class Transaction {
    static transactionCounter = 0;
    constructor(value=0, type='', date) {
        this._value = value;
        this._category = type;
        this._date = date;
        this._id = Transaction.transactionCounter;
        Transaction.transactionCounter++;
        Memory.save();
    }
    modifyTransaction(value, type, date) {
        this._category = type;
        this._date = date;
        this._date = date;
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
    get id() {
        return this._id;
    }
}