class Actor extends Entity {

    constructor(template) {
        super(template.spriteset, template.frame);
        this._template = template;
        this.attr = new ActorAttributes(this, template);
        this.inv = new Inventory(this);
        this.expired = false;
    }

    destroy() {
        super.destroy();
        this.expired = true;
    }

    doTurn(args) {
        // abstract
    }

    attack(targetActor) {
        const attackResult = {
            successful: false,
            damage: 0,
            crit: false,
            fatal: false
        };
        // target tries to dodge
        if(!Root.rng.chance(targetActor.attr.dodge()/100)) {
            attackResult.successful = true;
            let damage = Root.rng.float(this.attr.minDmg(), this.attr.maxDmg());
            if(Root.rng.chance(this.attr.crit()/100)) {
                damage *= 2;
                attackResult.crit = true;
            }
            let defence = targetActor.attr.defence() - this.attr.penetration();
            defence = defence > 0 ? defence : 0;
            damage -= defence;
            damage = damage > 0 ? damage : 0;
            attackResult.damage = damage;
            targetActor.attr.damage(damage); 
            attackResult.fatal = !targetActor.attr.alive();
        }
        return attackResult;
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