class NewGameScene extends MenuScene {

    constructor() {
        super('NewGameScene');
    } 

    preload() {
        this.loadSprites('players');
    }
    
    onCreate() {
        MenuTitle.make(this, 0.2, 'NEW GAME');
        CharacterSelectButton.makes(this, [
            [-255, 0.5, 'DWARF'],
            [-85, 0.5, 'ROGUE'],
            [85, 0.5, 'KNIGHT'],
            [255, 0.5, 'NOBLE']
        ]);
        MenuButton.make(this, 0.80, 'Return', 'R', '->MainMenuScene');
    }

    startNewGame(characterKey) {
        const view = this;
        const levelFactory = new LevelFactory();
        levelFactory.asyncCreate(1, 1, null, level => {
            Root.level = level;
            view.toScene('GameScene')
        });
    }
}