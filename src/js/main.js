
// game init and reference
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

// global data accessor
const Root = {
    scene: null,
    player: null,
    level: null,
    rng: new Rng()
};

// disable context menu
document.addEventListener('contextmenu', event => event.preventDefault());