import {Transaction} from "../models/Transaction.js";
import {Conto} from "../models/Conto.js";
import * as UI from "../view/ui.js"

let currentAccount;
let accounts = [];

export function createTransaction(value, type, date) {
    currentAccount.addTransaction(new Transaction(value.value, type.value, date.value));
    UI.showConto(currentAccount);
}
export function addConto(name, value, currency){
    accounts.push(new Conto(name, value, currency));
    UI.updateAccountList(accounts, currentAccount);
}

export function getAccounts(){ return accounts; }
export function getCurrAccount(){ return currentAccount; }
export function setCurrAccount(account){
    currentAccount = account;
    UI.updateAccountList(accounts, currentAccount);
    console.log(currentAccount.name);
}