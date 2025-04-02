import * as Memory from "./memory.js";

/**
 * Classe per rappresentare una categoria.
 */
export class Category {
    static categoryCounter = 1; //0 è la Root (/) category
    static categoryList = []; // Lista statica di tutte le categorie
    
    /**
     * Costruttore per la classe Category.
     * @param {string} name - Il nome della categoria.
     * @param {string} description - La descrizione della categoria.
     * @param {number} [parentCategoryID=null] - L'ID della categoria padre (opzionale, default: null).
     */
    constructor(name, description, parentCategoryID = 0) {
        this.id = Category.categoryCounter++;
        this._name = name;                              // Nome della categoria
        this._description = description;                // Descrizione della categoria
        this._parentCategoryID = parentCategoryID;      // Categoria padre
        Category.categoryList.push(this);               // Aggiunge la categoria alla lista statica
        Memory.save()                                   // Salva i dati nella memoria persistente
    }
    
    /**
     * Restituisce il nome della categoria.
     * @returns {string} Il nome della categoria.
     */
    get name() {
        return this._name;
    }
    
    /**
     * Imposta il nome della categoria.
     * @param {string} value - Il nuovo nome della categoria.
     */
    set name(value) {
        this._name = value;
    }
    
    /**
     * Restituisce la descrizione della categoria.
     * @returns {string} La descrizione della categoria.
     */
    get description() {
        return this._description;
    }
    
    /**
     * Imposta la descrizione della categoria.
     * @param {string} value - La nuova descrizione della categoria.
     */
    set description(value) {
        this._description = value;
    }
    
    /**
     * Restituisce la categoria padre.
     * @returns {number} L'ID della categoria padre.
     */
    get parentId() {
        return this._parentCategoryID;
    }
    
    /**
     * Imposta la categoria padre.
     * @param {number} value - Il nuovo ID della categoria padre.
     */
    set parentId(value) {
        this._parentCategoryID = value;
    }
}