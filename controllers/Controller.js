import {Transaction} from "../models/Transaction.js";
import {Conto} from "../models/Conto.js";
import * as UI from "../view/ui.js";
import * as jsonMng from "../models/jsonManager.js";

const nullAccount = new Conto("__none__", -1, "(-)");
let currentAccount;

loadData()

//TODO: rem test
if(false){
    Conto.accountList = [new Conto("Acc0"), new Conto("Acc1"), new Conto("Acc2"), new Conto("Acc3")];
    currentAccount = Conto.accountList[0];
    UI.updateAccountList(Conto.accountList, currentAccount);
}

export function createTransaction(value, type, date) {
    let transaction = new Transaction(value, type, date);
    currentAccount.addTransaction(transaction);
    UI.showConto(currentAccount);
}
export function addConto(name, value, currency){
    currentAccount = new Conto(name, value, currency);
    UI.updateAccountList(Conto.accountList, currentAccount);
}
export function remConto(id){
    Conto.accountList.forEach((account, i) => {
        if(account.id === id) Conto.accountList.splice(i, 1);
    });
    currentAccount = (Conto.accountList.length > 0)? Conto.accountList[0]: nullAccount;
    UI.updateAccountList(Conto.accountList, currentAccount);
}

export function getAccounts(){ return Conto.accountList; }
export function getCurrAccount(){ return currentAccount; }
export function setCurrAccount(account){
    currentAccount = account;
    UI.updateAccountList(Conto.accountList, currentAccount);
}
export function saveData(){
    jsonMng.save()
}
export function loadData(){
    jsonMng.load()
    UI.updateAccountList(Conto.accountList, currentAccount ?? Conto.accountList[0] ?? nullAccount);
    UI.showConto(currentAccount ?? Conto.accountList[0] ?? nullAccount);
}