class SceneTimer {
    
    constructor() {
        this.frame = 0;
        this.msTotal = 0;
        this.msSinceLastTick = 0;
    }

    hold(msTotal, msSinceLastTick) {
        this.msTotal = msTotal;
        this.msSinceLastTick = msSinceLastTick;
        return this;
    }

    tick() {
        this.frame ++;
        return this;
    }

    mod(value) {
        return this.frame % value === 0;
    }

}