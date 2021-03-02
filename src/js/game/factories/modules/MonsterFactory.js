class MonsterFactory {

    create(node) {
        const template = this.pickTemplate(node);
        const monster = new Monster(template);
        monster.ai = this.getAI(template.ai);
        return monster;
    }

    pickTemplate(node) {
        return Root.rng.pick(Object.values(MONSTER_TEMPLATES)); // TODO actual choice here
    }

    getAI(type) {
        return new MonsterAI(); // TODO
    }

}9