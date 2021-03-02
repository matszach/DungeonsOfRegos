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
        }
    }
}