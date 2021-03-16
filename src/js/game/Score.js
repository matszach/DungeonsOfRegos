class Score {

    constructor() {
        this.stats = {};
    }

    get(key) {
        if(!(key in this.stats)) {
            this.stats[key] = 0;
        }
        return this.stats[key];
    } 
    
    set(key, value) {
        this.stats[key] = value;
    }

    change(key, mod) {
        this.set(key, this.get(key) + mod);
    }

    reset() {
        this.stats = {};
    }

}