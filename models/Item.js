class Item {
    static objCounter = 0;
    
    constructor(name, quantity = 0, tag=null, descr=""){
        this._name = name;
        this._quantity = quantity; 
        this._tag = tag;
        this._description = descr;
        this._id = Item.objCounter;
        Item.objCounter++;
        this._descr = descr;
    }
    
    quantityAdd(value=1){
        this.quantity+=value;
    }
    quantityRem(value=1){
        this.quantityAdd(-value);
    }
    
    
    
    
    //-------------------- Getter / Setters --------------------
    
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    get quantity(){
        return this._quantity;
    }
    
    set quantity(value){
        this._quantity = value;
    }
    
    get tag(){
        return this._tag;
    }
    
    set tag(value){
        this._tag = value;
    }
    
    get descr(){
        return this._descr;
    }
    
    set descr(value){
        this._descr = value;
    }
    
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
}