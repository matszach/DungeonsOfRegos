class LevelHolder extends BaseSceneComponent {

    static make(scene, level, player) {
        const lh = new LevelHolder(scene, level, player);
        this.align(scene, lh.outerContainer, {leftPerc: 0.5, topPerc: 0.5});
        return lh;
    }

    constructor(scene, level, player) {
        super();
        this.scene = scene;
        this.level = level;
        this.player = player;
        this.scale = 1;
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
        player.create(this.scene, this.innerContainer);
        this.attachScrollListener();
    }

    destroy() {
        this.outerContainer.destroy();
        window.removeEventListener('wheel'); // TODO might not work properly, no way to test yet
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

    attachScrollListener() {
        window.addEventListener('wheel', event => {
            if(event.wheelDelta > 0) {
                this.upscale();
            } else {
                this.downscale();
            }
        });
    }

    upscale() {
        if(this.scale < 3) {
            this.scale *= 1.25;
        }
        this.outerContainer.setScale(this.scale, this.scale);
    }

    downscale() {
        if(this.scale > 0.5) {
            this.scale *= 0.8;
        }
        this.outerContainer.setScale(this.scale, this.scale);
    }
}
