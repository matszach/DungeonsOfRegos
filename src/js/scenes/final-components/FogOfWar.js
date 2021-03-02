class FogOfWar extends BaseSceneComponent {

    static make(scene) {
        const fow = new FogOfWar(scene);
        this.align(scene, fow.container, {leftPerc: 0.5, topPerc: 0.5});
        return fow;
    }

    constructor(scene) {
        super();
        this.scene = scene;
        this.container = scene.add.container(0, 0).setScale(1.0, 1.0);
        this.mask = this.scene.add.sprite(0, 0, 'fog_of_war').setOrigin(0.5, 0.5);
        this.container.add(this.mask);
        this.update();
    }

    update() {
        const senses = Root.player.attr.senses();
        const scale = 1.5 + senses/50;
        this.mask.setScale(scale);
    }
    
    destroy() {
        this.container.destroy();
        return this;
    }

}