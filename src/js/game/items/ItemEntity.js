class ItemEntity extends Entity {

    constructor(item) {
        super(item._template.spriteset, item._template.frame);
        this.item = item;
    }
    
}