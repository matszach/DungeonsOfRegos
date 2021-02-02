class Item {

    constructor(template) {
        this._template = template;
        this.type = TYPE[template.slot];
        this.rarity = RARITY[template.rarity];
        this.name = template.name;
        this.value = template.value;
    } 

}