class Weapon extends Equippable {

    constructor(template) {
        super(template);
        this.minDamage = template.minDamage;
        this.maxDamage = template.maxDamage;
        this.critChance = template.critChance;
        this.penetration = template.penetration;
    }

    damageRoll() {
        const damage = Root.rng.float(this.minDamage, this.maxDamage);
        if(Root.rng.chance(this.critChance/100)) {
            damage *= 2;
        }
        return damage;
    }

}