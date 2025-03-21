class Classes {
    constructor(name, value=0, currency="€") {
        this._transactionList = [];
        this._name = name;
        this._value = value;
        this._currency = currency;
    }

    addTransaction(transaction) {
        this._transactionList.push(transaction);
        this.value += parseInt(transaction.value);
    }

    removeTransaction(id) {

    }

    showConto(id){
        let out = "<h3>"+this.name+"</h3>"+
        "Value: " + this.value+this.currency;
        if(this._transactionList.size !== 0){
            out += "<br>Transactions: <table class='table table-success'>";
            this.transactionList.forEach(elem => {
                out+="<tr>";
                out+="<td>"+elem.value+"</td>";
                out+="<td>"+elem.type+"</td>";
                out+="<td>"+elem.date+"</td>";
                out+="<td><button onclick='removeTransaction("+elem.id+")'></button></td>";
                out+="</tr>";
            });
            out += "</table>";
        }
        document.getElementById(id).innerHTML = out;
    }

    get name() {
        return this._name;
    }
    get value() {
        return this._value;
    }
    get currency() {
        return this._currency;
    }
    get transactionList() {
        return this._transactionList;
    }

    set name(value) {
        this._name = value;
    }
    set value(value) {
        this._value = value;
    }
    set currency(value) {
        this._currency = value;
    }
    set transactionList(value) {
        this._transactionList = value;
    }
}

class Transaction {
    static transactionCounter = 0;
    constructor(value, type, date) {
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