class Classes {
    static id = 0;
    constructor(name, value=0, currency="€") {
        this._transactionList = [];
        this._name = name;
        this._value = value;
        this._currency = currency;
        this._id = Classes.id;
        Classes.id++;
    }

    addTransaction(transaction) {
        this._transactionList.push(transaction);
        this.value += parseInt(transaction.value);
    }

    removeTransaction(id) {
								 							 let foundedIndex;
        //console.log(JSON.stringify(this.transactionList));
        this.transactionList.forEach((elem, i) => {
            console.log("'"+elem.id+"'");
            console.log("'"+id+"'");
            if(parseInt(elem.id) == parseInt(id)){ 
                foundedIndex = i;
                console.log("1: "+this.value);
                this.value -= elem.value;
                console.log("2: "+this.value);
            }
        });
        console.log(foundedIndex);
        this.transactionList.splice(foundedIndex, 1);
        console.log(this.transactionList);
        this.showConto("conto");
    }

    showConto(id){
        let out = "<h3>"+this.name+"</h3>"+
        "Value: " + this.value+this.currency;
        //console.log(this.transactionList.length);
        if(this.transactionList.length !== 0){
            out += "<br/>Transactions: <table class='table table-success'>";
            out += "<tr>"+
            				"<td><b>Value</b></td>"+
            				"<td><b>Tag</b></td>"+
            				"<td><b>Date</b></td>"+
            				"<td></td>"+
            "</tr>";
            this.transactionList.forEach((elem, i) => {
                out+="<tr>";
                out+="<td>"+elem.value+"</td>";
                out+="<td>"+elem.type+"</td>";
                out+="<td>"+elem.date+"</td>";
                out+="<td><button class='btn btn-secondary remTransactionBtn"+this.id+"' id='remBtn"+i+"'>X</button></td>";
                out+="</tr>";
            });
            out += "</table>";
        }
        let outDiv = document.getElementById(id);
        outDiv.innerHTML = out;
        //console.log(outDiv.innerHTML);
        let buttons = outDiv.querySelectorAll("table>tbody>tr>td>button.remTransactionBtn"+this.id);
        //console.log(JSON.stringify(buttons));
        buttons?.forEach((btn) => {
            btn.addEventListener("click", () => {
                console.log("ID: "+btn.id)
                this.removeTransaction(btn.id.split("remBtn")[1]);
            });
        });
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
    get id() {
        return this._id;
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
    set id(value) {
        this._id = value;
    }
}

class Transaction {
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