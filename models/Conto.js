import * as UI from "../view/ui.js";
import * as Memory from "./jsonManager.js"

export class Conto {
    static id = 0;
    static accountList = [];
    
    constructor(name, value=0, currency="€") {
        this._transactionList = [];
        this._name = name;
        this._value = parseInt(value);
        this._currency = currency;
        if(this._name !== "__none__") {
            this._id = Conto.id;
            Conto.id++;
            Conto.accountList.push(this);
            // console.log(Conto.accountList);
            Memory.save()
        } else {
            this._id = -101;
        }
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
            if(parseInt(elem.id) === parseInt(id)){
                foundedIndex = i;
                console.log("1: "+this.value);
                this.value -= elem.value;
                console.log("2: "+this.value);
            }
        });
        // console.log(foundedIndex);
        this.transactionList.splice(foundedIndex, 1);
        console.log(this.transactionList);
        UI.showConto(this, "conto");
    }

    // showConto(id){
    //     UI.showConto(this, id);
    // }

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