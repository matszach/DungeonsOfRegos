class Actor extends Entity {

    constructor(template) {
        super(template.spriteset, template.frame);
        this._template = template;
        this.attr = new ActorAttributes(template);
        this.expired = false;
    }

    attack()

    canActorMoveTo(x, y, level) {
        const has = level.fields.has(x, y);
        if(!has) {  // out of bounds
            return false;
        }
        const field = level.fields.get(x, y);
        return (
            !field.blocksMove && // is wall ?
            field.agent === null && // no agent there ?
            field.interactable === null // no interactable there ?
        );
    }   

    actorMoveTo(x, y, level) {
        level.fields.get(this.x, this.y).actor === null;
        this.moveTo(x, y);
        level.fields.get(x, y).actor = this;
    }

    actorCanMoveBy(x, y, level) {
        return this.canActorMoveTo(this.x + x, this.y + y, level);
    }

    actorMoveBy(x, y, level) {
        this.actorMoveTo(this.x + x, this.y + y, level);
    }

}