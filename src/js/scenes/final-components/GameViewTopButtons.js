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
        const characterSheetButton = this.scene.add.sprite(-96, 32, 'buttons').setAlpha(0.5).setFrame(6).setScale(0.9);
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
        const optionsButton = this.scene.add.sprite(-32, 32, 'buttons').setAlpha(0.5).setFrame(7).setScale(0.9);
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
    }

    destroy() {
        this.container.destroy();
        return this;
    }

}