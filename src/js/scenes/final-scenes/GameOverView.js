class GameOverScene extends MenuScene {

    constructor() {
        super('GameOverScene');
    }   

    onCreate() {
        MenuTitle.make(this, 0.2, 'GAME OVER');
        ScoreRow.makes(this, [
            [0.30, 'Levels cleared', 'levelsCleared'],
            [0.35, 'Steps taken', 'stepsTaken'],
            [0.40, 'Monsters killed', 'monstersKilled'],
            [0.45, 'Items picked up', 'itemsPickedUp'],
        ]);
        MenuButton.make(this, 0.55, 'Continue', 'ENTER', '->MainMenuScene');
    }
    
}
