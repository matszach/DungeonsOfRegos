class MonsterFactory {

    create(node, diff, depth) {
        const template = this.pickTemplate(node);
        const monster = new Monster(template);
        this.adjust(monster, diff, depth);
        monster.ai = this.getAI(template.ai);
        return monster;
    }

    adjust(monster, diff, depth) {
        const modifier = (1 + diff * 0.15) * (1 + depth * 0.05);
        monster.attr.base.might *= modifier;
        monster.attr.base.agility *= modifier;
        monster.attr.base.health *= modifier;
        monster.attr.base.senses *= modifier;
        monster.attr.base.luck *= modifier;
    }

    pickTemplate(node) {
        return Root.rng.pick(Object.values(MONSTER_TEMPLATES)); // TODO actual choice here
    }

    getAI(type) {
        return new MonsterAI(); // TODO
    }

}9