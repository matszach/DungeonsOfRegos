class BootScene extends MenuScene {

    constructor() {
        super('BootScene');
    }   

    onCreate() {
        MenuTitle.make(this, 0.2, 'DUNGEONS OF REGOS');
        MenuButton.make(this, 0.35, 'Continue', 'ENTER', '->MainMenuScene');
    }
    
}
