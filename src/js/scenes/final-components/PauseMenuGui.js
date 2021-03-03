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

        // background shade
        const shade = this.scene.add.rectangle(0, 0, 50000, 30000, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.7); // TODO set sife of this to the size of window somehow
        this.container.add(shade);

        // gui background proper 
        const background = this.scene.add.rectangle(0, 0, 400, 600, 0x000000).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x999999).setAlpha(0.9);
        this.container.add(background);  

        // title
        const paused = this.scene.add.text(0, -250, 'Paused').setOrigin(0.5, 0.5).setColor('#ddd').setFontSize(60);
        this.container.add(paused);

        // buttons
        this.button(0, -190, 'Action Buttons ON', button => {
            this.scene.actionButtonGui.toggleVisibility();
            button.setText(this.scene.actionButtonGui.visible ? 'Action Buttons ON' : 'Action Buttons OFF');
        });
        this.button(0, -130, 'Exit', button => {
            this.scene.toScene('MainMenuScene');
        });

        // exit button
        const close = BaseSceneComponent.closeButton(175, -275, scene, () => scene.togglePauseMenu())
        this.container.add(close);
    }


    button(x, y, text, click) {
        const button = this.scene.add.text(x, y, text).setOrigin(0.5, 0.5).setAlpha(0.5).setColor('#ddd').setFontSize(30);;
        button.setInteractive().on('pointerover', () => {
            button.setAlpha(0.7);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            button.setAlpha(0.5);
            MenuButton.cursor('default');
        }).on('pointerdown', () => {
            button.setAlpha(0.8);
        }).on('pointerup', () => {
            button.setAlpha(0.7);
            click(button);
        });
        this.container.add(button);
    }


    destroy() {
        this.container.destroy();
        return this;
    }

}