class PauseMenuGui extends BaseSceneComponent {

    static make(scene, player) {
        const ih = new PauseMenuGui(scene, player);
        this.align(scene, ih.container, {leftPerc: 0.5, topPerc: 0.5});
        return ih;
    }

    constructor(scene, player) {
        super();
        this.scene = scene;
        this.player = player;
        this.container = this.scene.add.container(0, 0).setAlpha(0.9);

        // backgroud shade
        const shade = this.scene.add.rectangle(0, 0, 50000, 30000, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.7); // TODO set sife of this to the size of window somehow
        this.container.add(shade);

        // inventory background proper 
        const background = this.scene.add.rectangle(0, 0, 400, 600, 0x000000).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x999999).setAlpha(0.9);
        this.container.add(background);  

        // exit button
        const close = BaseSceneComponent.closeButton(175, -275, scene, () => scene.togglePauseMenu())
        this.container.add(close);
    }

    destroy() {
        this.container.destroy();
        return this;
    }

}