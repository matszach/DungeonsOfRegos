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
            Root.score.change('stepsTaken', 1);
            if(!!field.item && this.inv.pickup(field.item.item)) {
                field.item.destroy();
                field.item = null;
                Root.score.change('itemsPickedUp', 1);
            } 
        } else if(!!field.actor) {
            const result = this.attack(field.actor);
            if(result.successful) {
                Root.score.change('damageScored', 1);
                Root.score.change('attacksScored', result.damage);
                if(result.crit) {
                    Root.score.change('critsScored', 1);
                }
            }
            if(result.fatal) {
                if(!!field.actor.heldItem) {
                    field.item = new ItemEntity(field.actor.heldItem);
                    field.item.create(Root.scene, Root.scene.levelHolder.levelContainer, x, y); // FIXME move item entity to a layer under monster sprites
                }
                field.actor.destroy();
                field.actor = null;
                Root.score.change('monstersKilled', 1);
            }
        } else if(!!field.interactable) {
            field.interactable.onInteract(this);
        }
    }

    prepareForNextLevel() {
        this.inv.purgeBeforeNextLevel();
    }
}