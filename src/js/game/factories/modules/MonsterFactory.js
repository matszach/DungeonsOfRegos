class MonsterFactory {

    create(node) {
        const template = this.pickTemplate(node);
        const monster = new Monster(template);
        monster.ai = this.getAI(template.ai);
        // return monster;
        return null;
    }

    pickTemplate(node) {
        return {}; // TODO
    }

    getAI(type) {
        return new MonsterAI(); // TODO
    }

}