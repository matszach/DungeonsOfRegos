class LevelHolder extends BaseSceneComponent {

    static make(scene, level) {
        const lh = new LevelHolder(scene, level);
        this.align(scene, lh.outerContainer, {leftPerc: 0.5, topPerc: 0.5});
        return lh;
    }

    constructor(scene, level) {
        super();
        this.scene = scene;
        this.level = level;
        this.outerContainer = this.scene.add.container(0, 0);
        this.innerContainer = this.scene.add.container(0, 0);
        this.outerContainer.add(this.innerContainer);
        this.level.fields.iter((v, x, y) => {
            v.field?.create(this.scene, this.innerContainer, x, y);
        }).iter((v, x, y) => {
            v.interactable?.create(this.scene, this.innerContainer, x, y);
        }).iter((v, x, y) => {
            v.item?.create(this.scene, this.innerContainer, x, y);
        }).iter((v, x, y) => {
            v.actor?.create(this.scene, this.innerContainer, x, y);
        });
        return this;
    }

    destroy() {
        this.outerContainer.destroy();
        return this;
    }

    moveTo(x, y) {
        this.innerContainer.x = - x * SIZES.SPRITE_SIZE;
        this.innerContainer.y = - y * SIZES.SPRITE_SIZE;
        return this;
    }

    moveBy(x, y) {
        this.innerContainer.x -= x * SIZES.SPRITE_SIZE;
        this.innerContainer.y -= y * SIZES.SPRITE_SIZE;
        return this;
    }
}
