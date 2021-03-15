class GameOverScene extends MenuScene {

    constructor() {
        super('GameOverScene');
    }   

    onCreate() {
        MenuTitle.make(this, 0.2, 'GAME OVER');
        MenuButton.make(this, 0.35, 'Continue', 'ENTER', '->MainMenuScene');
    }
    
}
