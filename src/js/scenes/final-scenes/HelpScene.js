class HelpScene extends MenuScene {

    constructor() {
        super('HelpScene');
    } 
    
    onCreate() {
        MenuTitle.make(this, 0.2, 'HELP');
        MenuButton.make(this, 0.35, 'Return', 'R', '->MainMenuScene');
    }
}