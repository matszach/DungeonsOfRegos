class MainMenuScene extends MenuScene {

    constructor() {
        super('MainMenuScene');
    }   

    onCreate() {
        MenuTitle.make(this, 0.2, 'MAIN MENU');
        MenuButton.makes(this, [
            [0.35, 'New game', 'N', '->NewGameScene'],
            [0.50, 'Load game', 'L', '->LoadGameScene'],
            [0.65, 'Options', 'O', '->OptionsScene'],
            [0.80, 'Help', 'H', '->HelpScene']
        ]);
    }
}