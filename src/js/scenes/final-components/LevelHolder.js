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
        this.levelContainer = this.scene.add.container(0, 0);
        this.outerContainer.add(this.levelContainer);
        this.animationContainer = this.scene.add.container(0, 0);
        this.outerContainer.add(this.animationContainer);
        this.animations = [];
        this.level.fields.iter((v, x, y) => {
            v.field?.create(this.scene, this.levelContainer, x, y);
        }).iter((v, x, y) => {
            v.interactable?.create(this.scene, this.levelContainer, x, y);
        }).iter((v, x, y) => {
            v.item?.create(this.scene, this.levelContainer, x, y);
        }).iter((v, x, y) => {
            v.actor?.create(this.scene, this.levelContainer, x, y);
        });
        this.attachScrollListener();
    }

    destroy() {
        this.outerContainer.destroy();
        // window.removeEventListener('wheel'); // TODO might not work properly, no way to test yet
        return this;
    }

    moveTo(x, y) {
        this.levelContainer.x = - x * SIZES.SPRITE_SIZE;
        this.levelContainer.y = - y * SIZES.SPRITE_SIZE;
        this.animationContainer.x = - x * SIZES.SPRITE_SIZE;
        this.animationContainer.y = - y * SIZES.SPRITE_SIZE;
        return this;
    }

    moveBy(x, y) {
        this.levelContainer.x -= x * SIZES.SPRITE_SIZE;
        this.levelContainer.y -= y * SIZES.SPRITE_SIZE;
        this.animationContainer.x -= x * SIZES.SPRITE_SIZE;
        this.animationContainer.y -= y * SIZES.SPRITE_SIZE;
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
            this.scale *= 1.251;
        }
        this.outerContainer.setScale(this.scale);
        this.scene.actionButtonGui?.container.setScale(this.scale)
        this.scene.fogOfWar?.container.setScale(this.scale)
    }

    downscale() {
        if(this.scale > 0.5) {
            this.scale *= 0.799;
        }
        this.outerContainer.setScale(this.scale);
        this.scene.actionButtonGui?.container.setScale(this.scale)
        this.scene.fogOfWar?.container.setScale(this.scale)

        // TODO base on this
        // this.addAnimation(
        //     this.scene.add.rectangle(0, 0, 100, 100, 0xff0000),
        //     Root.player.x, Root.player.y, 0, 0, 100, 0.99, 0.99
        // )
    }

    addAnimation(element, xStart, yStart, xVelocity, yVelocity, duration, fadeRatio, scaleRatio) {
        this.animationContainer.add(element);
        if(!!element.setOrigin) {
            element.setOrigin(0.5, 0.5);
        }
        element.x = xStart * SIZES.SPRITE_SIZE;
        element.y = yStart * SIZES.SPRITE_SIZE;
        this.animations.push({
            element: element,
            velocity: {
                x: xVelocity * SIZES.SPRITE_SIZE,
                y: yVelocity * SIZES.SPRITE_SIZE
            },
            durationLeft: duration,
            fadeRatio: fadeRatio,
            scaleRatio: scaleRatio
        });
    }

    tickAnimations() {
        this.animations = this.animations.filter(a => {
            a.durationLeft--;
            if(a.durationLeft < 0) {
                a.element.destroy();
                return false;
            } else {
                a.element.x += a.velocity.x;
                a.element.y += a.velocity.y;
                a.element.alpha *= a.fadeRatio;
                a.element.scaleX *= a.scaleRatio;
                a.element.scaleY *= a.scaleRatio;
                return true;
            }   
        });
    }

    animationDamageTaken(dmg, isCrit, x, y) {
        const textValue =  `${dmg.toFixed(1)}${isCrit ? '!' : ''}`;
        const textEntity = this.scene.add.text(0, 0, textValue).setColor('#f00').setFontSize(isCrit ? 30 : 20).setFontStyle(isCrit ? 'bold' : 'bolder');
        const circle = this.scene.add.graphics(0, 0).fillStyle(0xff0000, 0.2).fillCircle(0, 0, 0.5 * SIZES.SPRITE_SIZE);
        this.addAnimation(textEntity, x, y - 0.5, Root.rng.float(-0.005, 0.005), Root.rng.float(-0.005, 0), 1200, 0.99, 0.998);
        this.addAnimation(circle, x, y, 0, 0, 1200, 0.99, 0.995);
    }

    
    animationMissed(x, y) {
        const textEntity = this.scene.add.text(0, 0, 'miss').setColor('#666').setFontSize(20).setFontStyle('bold');
        const circle = this.scene.add.graphics(0, 0).fillStyle(0x666666, 0.2).fillCircle(0, 0, 0.5 * SIZES.SPRITE_SIZE);
        this.addAnimation(textEntity, x, y - 0.5, Root.rng.float(-0.005, 0.005), Root.rng.float(-0.005, 0), 1200, 0.99, 0.998);
        this.addAnimation(circle, x, y, 0, 0, 1200, 0.99, 0.995);
    }
    
}
