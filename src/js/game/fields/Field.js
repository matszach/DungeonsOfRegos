class Field extends Entity {

    constructor(template) {
        super(template.spriteset, 0);
        this.template = template;
        this.blocksMove = template.blocksMove;
        this.blocksSight = template.blocksSight;
    }

    onWalkedOn(agent) {
        // abstract
    }

}