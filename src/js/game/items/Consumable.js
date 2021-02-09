class Consumable extends Item {

    static getEffectFunction(effect) {
        return () => {}; // TODO
    }

    constructor(template) {
        super(template);
        this.effect = Consumable.getEffectFunction(template.effect);
    }

    use(user) {
        return this.effect(user);
    }

}