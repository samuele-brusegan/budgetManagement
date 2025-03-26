export class PaymentOptions {
    static optionList = []; // Lista statica di tutte le opzioni di pagamento
    
    /**
     * Costruttore per la classe PaymentOptions.
     * @param {string} name - Il nome dell'opzione di pagamento.
     * @param {string} imagePath - Il percorso dell'immagine dell'opzione di pagamento.
     */
    constructor(name, imagePath) {
        this._name = "Default name"; // Nome di default
        this._imagePath = "#"; // Percorso immagine di default
        this._name = name; // Imposta il nome fornito
        this._imagePath = imagePath; // Imposta il percorso immagine fornito
        PaymentOptions.optionList.push(this); // Aggiunge l'opzione alla lista statica
    }
    
    /**
     * Modifica il nome e il percorso dell'immagine dell'opzione di pagamento.
     * @param {string} [name=this._name] - Il nuovo nome (opzionale, default: nome corrente).
     * @param {string} [path=this._imagePath] - Il nuovo percorso immagine (opzionale, default: percorso corrente).
     */
    modifyOption(name = this._name, path = this._imagePath){
        this._name = name; // Aggiorna il nome
        this._imagePath = path; // Aggiorna il percorso immagine
    }
}