import {save} from "./memory.js";

export class Item {
    static objCounter = 0;
    
    constructor(name, quantity=0, tag=null, descr=""){
        // console.log(name, quantity, tag, descr)
        this._name = name;
        this._quantity = quantity; 
        this._tag = tag;
        this._description = descr;
        this._id = Item.objCounter;
        Item.objCounter++;
        // console.log(this)
    }
    
    quantityAdd(value=1){
        this.quantity+=value;
        save()
    }
    quantityRem(value=1){
        this.quantityAdd(-value);
        save()
    }
    modify(name, quantity, tag, descr){
        this.name = name;
        this.quantity = quantity;
        this.tag = tag;
        this.description = descr;
        save()
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
    
    get description(){
        return this._description;
    }
    
    set description(value){
        this._description = value;
    }
    
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
}