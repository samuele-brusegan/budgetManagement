// controllers/debugCtrl.js

import * as Memory from "../models/memory.js"; // Assuming this is the correct path
import { Conto } from "../models/Conto.js"; // Assuming this is the correct path
import { Category } from "../models/Category.js"; // Assuming this is the correct path

export function setDev(val) {
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    setCookie("devMode", val, 31);
}

export function getDev() {
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    return getCookie("devMode") === "true";
}

// DEVELOPER MODE BELOW

export function cleanImport(val) {
    Memory.warn_deleteAll()
    convertJsonToObjects(val);
    // localStorage.setItem("data_accountList", JSON.stringify(val.accounts));
    // localStorage.setItem("data_categories", JSON.stringify(val.categories));
}

export function cleanExport() {
    return localStorage;
}

/**
 * Converts a JSON object (or JSON string) into Conto and Category objects, including transactions.
 * @param {object|string} jsonData - The JSON data to convert. Can be a JSON object or a JSON string.
 * @returns {object} An object containing the converted accounts and categories.
 * @throws {Error} If the input is not valid JSON or if the JSON structure is incorrect.
 */
export function convertJsonToObjects(jsonData) {
    let parsedData;
    
    // Check if the input is a string and try to parse it as JSON
    if (typeof jsonData === "string") {
        try {
            parsedData = JSON.parse(jsonData);
        } catch (error) {
            throw new Error("Invalid JSON string provided.");
        }
    }
    else if (typeof jsonData === "object") {
        // If it's already an object, use it directly
        parsedData = jsonData;
    } else {
        throw new Error("Invalid input type. Expected a JSON object or a JSON string.");
    }
    
    // Check if the parsed data has the expected structure
    if (!parsedData.accounts || !parsedData.categories) {
        throw new Error(
            "Invalid JSON structure. Expected 'accounts' and 'categories' properties."
        );
    }
    
    const convertedAccounts = [];
    const convertedCategories = [];
    
    // Convert categories
    if (parsedData.categories) {
        parsedData.categories.forEach((categoryData) => {
            const newCategory = new Category(categoryData._name, categoryData._type);
            convertedCategories.push(newCategory);
        });
    }
    
    // Convert accounts (including transactions)
    if (parsedData.accounts) {
        parsedData.accounts.forEach((accountData) => {
            const newAccount = new Conto(
                accountData._name,
                accountData._value,
                accountData._currency,
                // accountData._transactionList
            );
            // Convert transactions
            if (accountData._transactionList) {
                newAccount.addManyTransactions(accountData._transactionList)
                newAccount.addManyItems(accountData._inventory)
            }
            convertedAccounts.push(newAccount);
        });
    }
    
    return {
        accounts: convertedAccounts,
        categories: convertedCategories,
    };
}