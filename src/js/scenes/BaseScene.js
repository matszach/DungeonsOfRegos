class BaseScene extends Phaser.Scene {

    constructor(key) {
        super({key: key});
        this.timer = new SceneTimer();
        this.keys = {};
        this.viewWidth = -1;
        this.viewHeight = -1;
        window.onresize = () => {this.refit()};
    }

    create() {
        this.onCreate();
        this.refit();
    }

    align(e, args) {
        if(!!args.leftPx) e.x = args.leftPx;
        if(!!args.rightPx) e.x = this.viewWidth - args.rightPx;
        if(!!args.topPx) e.y = args.topPx;
        if(!!args.bottomPx) e.y = this.viewHeight - args.bottomPx;
        if(!!args.leftPerc) e.x = this.viewWidth * args.leftPerc;
        if(!!args.rightPerc) e.x = this.viewWidth * (1 - args.rightPerc);
        if(!!args.topPerc) e.y = this.viewHeight * args.topPerc;
        if(!!args.bottomPerc) e.y = this.viewHeight * (1 - args.topPerc);
        if(!!args.xCenterPx) e.x = this.viewWidth/2 + args.xCenterPx;
        if(!!args.yCenterPx) e.y = this.viewHeight/2 + args.yCenterPx;
    }
    
    groupAlign(elements, args) {
        let e = elements[0];
        let {x: initX, y: initY} = elements[0];
        this.align(elements[0], args);
        let {x: newX, y: newY} = elements[0];
        let changeX = newX - initX;
        let changeY = newY - initY;
        for(let i = 1; i < elements.length; i++) {
            e = elements[i];
            this.align(e, {
                leftPx: e.x + changeX,
                topPx: e.y + changeY
            });
        }
    }

    onCreate() {
        // abstract
    }

    registerResizeEvent(callback) {
        Holder.onResizeEvents.push(callback);
    }

    refit() {
        let {innerWidth: w, innerHeight: h} = window;
        this.viewWidth = w;
        this.viewHeight = h;
        Game.scale.resize(w, h);
        Holder.onResizeEvents.forEach(e => e(this));
        this.onResize(w, h);
    }

    onResize(newWidth, newHeight) {
        // abstract
    }

    loadImages(...imagesInfo) {
        (imagesInfo || []).forEach(img => this.load.image(img, `img/${img}.png`), this);
    }

    loadSprites(...spritesInfo) {
        (spritesInfo || []).forEach(spr => this.load.spritesheet(spr, `img/${spr}.png`, {
            frameWidth: SIZES.SPRITE_SIZE,
            frameHeight: SIZES.SPRITE_SIZE
        }), this);
    }

    getKey(code) {
        const codeValue = Phaser.Input.Keyboard.KeyCodes[code];
        const key = this.input.keyboard.addKey(codeValue);
        return key;
    }

    registerKeys(...keyInfo) {
        Object.keys(this.keys).forEach(k => {
            this.keys[k].onDown = () => {};
            this.keys[k].onUp = () => {};
        }, this);
        keyInfo.forEach(k => {
            const codes = Array.isArray(k[0]) ? k[0] : [k[0]];
            codes.forEach(code => {
                const key = this.getKey(code);
                this.keys[code] = key;
                if (k[1] === 'down') {
                    key.onDown = () => k[2](this);
                } else if (k[1] === 'up') {
                    key.onUp = () => k[2](this);
                }
            }, this);            
        }, this);
    }

    update(msTotal, msSinceLastTick) {
        this.timer.hold(msTotal, msSinceLastTick).tick();
        this.doFrame();
    }

    doFrame() {
        // abstract
    }

    toScene(name) {
        Holder.onResizeEvents.length = 0;
        this.scene.start(name);
    }

}