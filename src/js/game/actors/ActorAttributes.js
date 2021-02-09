class ActorAttributes {

    static _extract(template) {
        return {
            might: template.might || 0,
            agility: template.agility || 0,
            health: template.health || 0,
            senses: template.senses || 0,
            luck: template.luck || 0,
            defence: 0
        };
    } 

    constructor(player, template) {
        this.player = player;
        this.base = ActorAttributes._extract(template);
        this.extra = ActorAttributes._extract({});
        this.damageTaken = 0;
    }

    // Damage and healing
    damage(dmg) {
        this.damageTaken += dmg;
        return this;
    } 

    heal(heal) {
        this.damageTaken -= heal;  
        return this;
    }

    alive() {
        return this.damageTaken < this.health();
    }

    // Attributes
    might() {
        return this.base.might + this.extra.might;
    }

    agility() {
        return this.base.agility + this.extra.agility;
    }

    health() {
        return this.base.health + this.extra.health;
    }

    senses() {
        return this.base.senses + this.extra.senses;
    }

    luck() {
        return this.base.luck + this.extra.luck;
    }

    defence() {
        return this.base.defence + this.extra.defence;
    }

    // Modifiers
    addModifiers(mods) {
        this.extra.might += mods.might || 0;
        this.extra.agility += mods.agility || 0;
        const oh = this.health();
        this.extra.health += mods.health || 0;
        const nh = this.health();
        this.damageTaken = this.damageTaken * nh/oh;
        this.extra.senses += mods.senses || 0;
        this.extra.luck += mods.luck || 0;
        this.extra.defence += mods.defence || 0;
        return this;
    }

    removeModifiers(mods) {
        Object.keys(mods).forEach(key => mods[key] = - mods[key]);
        return this.addModifiers(mods);
    }

}