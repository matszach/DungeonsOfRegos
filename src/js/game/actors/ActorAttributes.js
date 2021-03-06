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
        this._minDamage = template.minDamage || 1;
        this._maxDamage = template.maxDamage || 3;
        this._defence = template.defence || 0;
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

    fullHeal() {
        this.damageTaken = 0;
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
        return this._defence + this.base.defence + this.extra.defence;
    }

    crit() {
        return (this.player.inv.equipped.mainHand?.critChance || 1) + this.luck()/10 + this.senses()/10;
    }

    minDmg() {
        return (this.player.inv.equipped.mainHand?.minDamage || this._minDamage) + this.might()/10;
    }

    maxDmg() {
        return (this.player.inv.equipped.mainHand?.maxDamage || this._maxDamage) + this.might()/5;
    }

    penetration() {
        return (this.player.inv.equipped.mainHand?.penetration || 0) + + this.senses()/25;
    }

    dodge() {
        return this.agility()/5;
    }

    // Modifiers
    addModifiers(mods) {
        this.extra.might += parseFloat(mods.might) || 0;
        this.extra.agility += parseFloat(mods.agility) || 0;
        const oh = this.health();
        this.extra.health += parseFloat(mods.health) || 0;
        const nh = this.health();
        this.damageTaken = this.damageTaken * nh/oh;
        this.extra.senses += parseFloat(mods.senses) || 0;
        this.extra.luck += parseFloat(mods.luck) || 0;
        this.extra.defence += parseFloat(mods.defence) || 0;
        return this;
    }

    removeModifiers(mods) {
        this.extra.might -= parseFloat(mods.might) || 0;
        this.extra.agility -= parseFloat(mods.agility) || 0;
        const oh = this.health();
        this.extra.health -= parseFloat(mods.health) || 0;
        const nh = this.health();
        this.damageTaken = this.damageTaken * nh/oh;
        this.extra.senses -= parseFloat(mods.senses) || 0;
        this.extra.luck -= parseFloat(mods.luck) || 0;
        this.extra.defence -= parseFloat(mods.defence) || 0;
        return this;
    }
    
    healthToString() {
        const h = this.health();
        return `${Math.round(h - this.damageTaken)}/${h}`;
    }

    critToString() {
        return `${Math.round(this.crit(), 2)}%`; 
    }

    damageRangeToString() {
        return `${this.minDmg()} - ${this.maxDmg()}`;
    }

    dodgeToString() {
        return `${Math.round(this.dodge(), 2)}%`; 
    }

}