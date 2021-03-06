class Player extends Actor {

    constructor(template) {
        super(template);
    }

    doTurn(x, y) {
        x += this.x; 
        y += this.y;
        const field = Root.level.get(x, y);
        if(this.actorCanMoveTo(x, y, Root.level)) {
            this.actorMoveTo(x, y, Root.level);
            if(!!field.item && this.inv.pickup(field.item.item)) {
                field.item.destroy();
                field.item = null;
            } 
        } else if(!!field.actor) {
            const result = this.attack(field.actor);
            if(result.fatal) {
                field.actor.destroy();
                field.actor = null;
            }
        } else if(!!field.interactable) {
            field.interactable.onInteract(this);
        }
    }

    prepareForNextLevel() {
        this.inv.purgeBeforeNextLevel();
        this.attr.fullHeal();
    }
}