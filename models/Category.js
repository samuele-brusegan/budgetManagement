class Category {

    static categoryList:Category[] = [];

    constructor(name, description, parentCategory = null) {
        this._name = name;
        this._description = description;
        this._parentCategory = parentCategory;
        Category.categoryList.push(this);
    }

    get name():string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get description():string {
        return this._description;
    }
    set description(value:string) {
        this._description = value;
    }
    get parentCategory(): Category {
        return this._parentCategory;
    }
    set parentCategory(value: Category) {
        this._parentCategory = value;
    }
}