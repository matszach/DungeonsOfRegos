class Entity {

    constructor(spriteset, frame) {
        this.spriteset = spriteset;
        this.frame = frame;
        this.x = 0;
        this.y = 0;
        this.sprite;
    }

    placeAt(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
        this.sprite.x = x * SIZES.SPRITE_SIZE;
        this.sprite.y = y * SIZES.SPRITE_SIZE;
        return this;
    }

    setFrame(frame) {
        this.frame = frame;
        if(!!this.sprite) {
            this.sprite.setFrame(this.frame);
        }
        return this;
    }

    create(scene, container, x, y) {
        this.sprite = scene.add.sprite(0, 0, this.spriteset);
        container.add(this.sprite);
        this.sprite.setFrame(this.frame);
        this.moveTo(x || this.x, y || this.y);
        return this;
    }

    destroy() {
        this.sprite.destroy();
        return this;
    }

}