
const Game = new Phaser.Game({
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    pixelArt: true, // cleaner rendering for pixelart based games
    scene: [
        BootScene, 
        MainMenuScene,
        NewGameScene,
        LoadGameScene,
        HelpScene,
        OptionsScene,
        GameScene
    ]
});

const Root = {
    level: null,
    rng: new Rng()
};