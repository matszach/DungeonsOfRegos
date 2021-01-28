class Item {

    constructor(template) {
        this._template = template;
        this.slot = SLOT[template.slot];
        this.name = template.name;
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