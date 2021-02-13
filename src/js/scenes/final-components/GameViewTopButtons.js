class GameViewTopButtons extends BaseSceneComponent {

    static make(scene) {
        const gvt = new GameViewTopButtons(scene);
        this.align(scene, gvt.container, {topPerc: 0.01, rightPerc: 0.01});
        return gvt;
    }

    constructor(scene) {
        super();
        this.scene = scene;
        this.container = this.scene.add.container(0, 0);
        // character button
        const characterSheetButton = this.scene.add.sprite(-96, 32, 'top_buttons').setAlpha(0.5).setFrame(2).setScale(0.9);
        characterSheetButton.setInteractive().on('pointerover', () => {
            characterSheetButton.setAlpha(0.7);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            characterSheetButton.setAlpha(0.5);
            MenuButton.cursor('default');
        }).on('pointerdown', () => {
            characterSheetButton.setAlpha(0.8);
        }).on('pointerup', () => {
            scene.toggleCharacterSheet();
        });
        this.container.add(characterSheetButton);
        // options
        const optionsButton = this.scene.add.sprite(-32, 32, 'top_buttons').setAlpha(0.5).setFrame(3).setScale(0.9);
        optionsButton.setInteractive().on('pointerover', () => {
            optionsButton.setAlpha(0.7);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            optionsButton.setAlpha(0.5);
            MenuButton.cursor('default');
        }).on('pointerdown', () => {
            optionsButton.setAlpha(0.8);
        }).on('pointerup', () => {
            scene.togglePauseMenu();
        });
        this.container.add(optionsButton);
        // downscale
        const downscaleButton = this.scene.add.sprite(-160, 32, 'top_buttons').setAlpha(0.5).setFrame(1).setScale(0.9);
        downscaleButton.setInteractive().on('pointerover', () => {
            downscaleButton.setAlpha(0.7);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            downscaleButton.setAlpha(0.5);
            MenuButton.cursor('default');
        }).on('pointerdown', () => {
            downscaleButton.setAlpha(0.8);
        }).on('pointerup', () => {
            scene.levelHolder.downscale();
        });
        this.container.add(downscaleButton);
        // upscale
        const upscaleButton = this.scene.add.sprite(-224, 32, 'top_buttons').setAlpha(0.5).setFrame(0).setScale(0.9);
        upscaleButton.setInteractive().on('pointerover', () => {
            upscaleButton.setAlpha(0.7);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            upscaleButton.setAlpha(0.5);
            MenuButton.cursor('default');
        }).on('pointerup', () => {
            upscaleButton.setAlpha(0.8);
        }).on('pointerup', () => {
            scene.levelHolder.upscale();
        });
        this.container.add(upscaleButton);
    }

    destroy() {
        this.container.destroy();
        return this;
    }

}