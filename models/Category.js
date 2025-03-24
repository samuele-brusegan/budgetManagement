import * as Memory from "./jsonManager.js";

export class Category {

    static categoryList = [];

    constructor(name, description, parentCategory = null) {
        this._name = name;
        this._description = description;
        this._parentCategory = parentCategory;
        Category.categoryList.push(this);
        Memory.save()
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get parentCategory() {
        return this._parentCategory;
    }
    set parentCategory(value) {
        this._parentCategory = value;
    }
}