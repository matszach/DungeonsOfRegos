class Monster extends Actor {

    constructor(template) {
        super(template);
        this.isMonster = true;
        this.ai = null;
        this.chanceToAct = template.chanceToAct/100;
        this.alert = false;
    }

    doTurn() {
        // test monster logic FIXME
        if(Root.rng.chance(this.chanceToAct)) {
            const x = Root.rng.pick([1, -1, 0, 0]);
            const y = x === 0 ? Root.rng.pick([1, -1]) : 0;
            if(this.actorCanMoveBy(x, y, Root.level)) {
                this.actorMoveBy(x, y, Root.level);
            }
        }
    }

}