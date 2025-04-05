class Object {
    static inventory = [];
    constructor(name, quantity = 0, tag, descr){
        this._name = name;
        this._quantity = quantity; 
        this._tag = tag;
        this._description = descr;
    }
}

