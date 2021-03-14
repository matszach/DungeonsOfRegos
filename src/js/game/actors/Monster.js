class Monster extends Actor {

    constructor(template) {
        super(template);
        this.isMonster = true;
        this.ai = null;
        this.chanceToAct = template.chanceToAct/100;
        this.alert = false;
    }

    doTurn() {
        // TODO, logic should come from AI instance, this is a test logic
        if(Root.rng.chance(this.chanceToAct)) {
            const player = Root.player; 
            const {x: px, y: py} = player;
            const diffx = this.x - px; 
            const diffy = this.y - py;
            if(this.alert) {
                const dir = Root.rng.weightedPick(
                    [{x: -1, y: 0}, diffx > 0 ? 20 : 1],
                    [{x: 1, y: 0}, diffx < 0 ? 20 : 1],
                    [{x: 0, y: -1}, diffy > 0 ? 20 : 1],
                    [{x: 0, y: 1}, diffy < 0 ? 20 : 1]
                );
                if(this.x + dir.x === px && this.y + dir.y === py) {
                    this.attack(player);
                } else if(this.actorCanMoveBy(dir.x, dir.y, Root.level)) {
                    this.actorMoveBy(dir.x, dir.y, Root.level);
                }
            } else if(Math.abs(diffx) < 5 && Math.abs(diffy) < 5) {
                console.log(diffx, diffy);
                this.alert = true;
                // alert animation ("!") here
            }
           
        }
    }

}