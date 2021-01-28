class GameScene extends BaseScene {

    constructor() {
        super('GameScene');
    }   

    preload() {
        this.loadSprites(
            'armors', 'boots', 'floors', 'helmets', 'necklaces', 'players', 
            'potions', 'rings', 'shields', 'stairs', 'walls', 'weapons'
        );
    }

    onCreate() {
        this.level = Root.level;
        this.levelHolder = LevelHolder.make(this, Root.level);    
        this.levelHolder.moveTo(5, 5);
        MenuTitle.make(this, 0.2, 'GameScene');
    }
    
}
