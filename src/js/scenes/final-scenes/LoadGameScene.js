class LoadGameScene extends MenuScene {

    constructor() {
        super('LoadGameScene');
    } 
    
    onCreate() {
        MenuTitle.make(this, 0.2, 'LOAD GAME');
        MenuButton.make(this, 0.35, 'Return', 'R', '->MainMenuScene');
    }
}