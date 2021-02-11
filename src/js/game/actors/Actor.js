class Actor extends Entity {

    constructor(template) {
        super(template.spriteset, template.frame);
        this._template = template;
        this.attr = new ActorAttributes(this, template);
        this.inv = new Inventory(this);
        this.expired = false;
    }

    attack(targetActor) {
       
    }

    actorCanMoveTo(x, y, level) {
        const has = level.fields.has(x, y);
        if(!has) {  // out of bounds
            return false;
        }
        const field = level.fields.get(x, y);
        return (
            !field.field.blocksMove && // is wall ?
            field.actor === null && // no actor there ?
            field.interactable === null // no interactable there ?
        );
    }   
    
    actorMoveTo(x, y, level) {
        const current = level.fields.get(this.x, this.y);
        const target = level.fields.get(x, y);
        current.actor = null;
        this.moveTo(x, y);
        target.actor = this;
    }

    actorCanMoveBy(x, y, level) {
        return this.actorCanMoveTo(this.x + x, this.y + y, level);
    }

    actorMoveBy(x, y, level) {
        this.actorMoveTo(this.x + x, this.y + y, level);
    }

}