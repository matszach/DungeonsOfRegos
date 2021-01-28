// Phaser rng wrapper
class Rng {

    constructor(seeds) {
        this.gen = new Phaser.Math.RandomDataGenerator(seeds);
    }

    seed(seeds) {
        return this.gen.init(seeds);
    }

    frac() {
        return this.gen.frac();
    }

    chance(frac) {
        return this.frac() < frac
    }

    int(min, max) {
        return this.gen.integerInRange(min, max);
    }

    float(min, max) {
        return this.gen.realInRange(min, max);
    }

    normal() {
        return this.gen.normal();
    }

    pick(arr) {
        return this.gen.pick(arr); 
    } 

    shuffle(arr) {
        return this.gen.shuffle(arr);
    }
}