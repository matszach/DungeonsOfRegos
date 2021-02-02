class Equippable extends Item {

    constructor(template) {
        super(template);
        this.modifiers = {
            might: template.might || 0,
            agility: template.agility || 0,
            health: template.health || 0,
            senses: template.senses || 0,
            luck: template.luck || 0,
            defence: template.defence || 0
        };
    }

}