class Consumable extends Item {

    static getEffectFunction(effect) {
        const effectArgs = effect.split(':');
        switch(effectArgs[0]) {
            case 'HEALING': return user => { 
                const min = parseInt(effectArgs[1]);
                const max = parseInt(effectArgs[2]);
                const healing = Root.rng.float(min, max);
                user.attr.heal(healing);
            };
            default: return user => {};
        }
    }

    constructor(template) {
        super(template);
        this.effect = Consumable.getEffectFunction(template.effect);
    }

    use(user) {
        Root.score.change('consumablesUsed', 1);
        return this.effect(user);
    }

}