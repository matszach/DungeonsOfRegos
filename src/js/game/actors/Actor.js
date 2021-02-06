class Actor extends Entity {

    constructor(template) {
        super(template.spriteset, template.frame);
        this._template = template;
        this.attr = new ActorAttributes(template);
        this.inv = new Inventory();
        this.expired = false;
    }

    attack(targetActor) {
        // CHANCE TO HIT HERE todo
        const wpn = this.inv.equipped[SLOT.MAIN_HAND];
        const might = this.attr.might();
        let effAtk;
        let effDef = targetActor.attr.defence();
        if(!!wpn) {
            effDef -= wpn.penetration;
            if(effDef < 0) {
                effDef = 0;
            }
            effAtk = wpn.damageRoll() + might * 0.15;
        } else {
            effAtk = Root.rng.float(1, might) + might * 0.12;
        }
        let totalDamage = effAtk - effDef;
        if (totalDamage < 0) {
            totalDamage = 0;
        }
        return totalDamage;
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