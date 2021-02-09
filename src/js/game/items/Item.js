class Item {

    constructor(template) {
        this._template = template;
        this.type = ITEM_TYPE[template.type];
        this.rarity = RARITY[template.rarity];
        this.name = template.name;
        this.value = template.value;
    } 

}