class Weapon extends Item {

    constructor(template) {
        super(template);
        this.minDamage = template.minDamage;
        this.maxDamage = template.maxDamage;
        this.critChance = template.critChance;
        this.penetration = template.penetration;
    }

}