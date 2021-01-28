class MenuScene extends BaseScene {

    constructor(key) {
        super(key);
        this.rng = new Rng();
        this.animationShards = [];
    }

    _saveCursorPos(x, y) {
        this._lastCursorX = x;
        this._lastCursorY = y;
    }

    _cursorPosChanged(x, y) {
        return this._lastCursorX !== x || this._lastCursorY !== y;
    }

    _dropNewShard(x, y) {
        const size = this.rng.float(2, 15);
        const alpha = this.rng.float(0.05, 0.30);
        const shard = this.add.rectangle(x, y, size, size, 0xcccccc).setOrigin(0.5, 0.5).setAlpha(alpha);
        this.animationShards.push({
            shard: shard,
            speedX: this.rng.float(-2, 2),
            speedY: this.rng.float(-2, 2)
        });
    }

    _animateShards() {
        this.animationShards.forEach(s => {
            s.shard.setAlpha(s.shard.alpha - 0.001);
            if(s.shard.alpha < 0) {
                s.shard.destroy();
            } else {
                s.shard.x = s.shard.x + s.speedX;
                s.shard.y = s.shard.y + s.speedY;
            }
            s.speedY += 0.03;
        });
    }

    _cullShards() {
        this.animationShards = this.animationShards.filter(s => s.shard.alpha > 0);
    }

    update() {
        const {x, y} = Game.input.mousePointer.position;
        if(this._cursorPosChanged(x, y) || this.rng.chance(0.03)) {
            this._saveCursorPos(x, y);
            this._dropNewShard(x, y);
        }
        this._animateShards();
        this._cullShards();
    }

}