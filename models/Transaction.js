export class Transaction {
    static transactionCounter = 0;
    constructor(value=0, type='', date) {
        this._value = value;
        this._type = type;
        this._date = date;
        this._id = Transaction.transactionCounter;
        Transaction.transactionCounter++;
    }
    modifyTransaction(value, type, date) {
        this._type = type;
        this._date = date;
        this._date = date;
    }

    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get date() {
        return this._date;
    }
    get id() {
        return this._id;
    }
}