class GameScene extends BaseScene {

    constructor() {
        super('GameScene');
    }   

    preload() {
        this.loadSprites(
            'armors', 'boots', 'floors', 'helmets', 'necklaces', 
            'players', 'potions', 'rings', 'shields', 'stairs', 
            'walls', 'weapons', 'valuables'
        );
    }

    onCreate() {
        this.level = Root.level;
        this.levelHolder = LevelHolder.make(this, Root.level, Root.player);  
        this.centerOnPlayer();  
        this.registerControls();
    }

    centerOnPlayer() {
        this.levelHolder.moveTo(Root.player.x, Root.player.y);
    }

    registerControls() {
        this.registerKeys(
            ['W', 'up', scene => {
                if(Root.player.actorCanMoveBy(0, -1, Root.level)) {
                    Root.player.actorMoveBy(0, -1, Root.level);
                }
                scene.centerOnPlayer();
            }],
            ['A', 'up', scene => {
                if(Root.player.actorCanMoveBy(-1, 0, Root.level)) {
                    Root.player.actorMoveBy(-1, 0, Root.level);
                }
                scene.centerOnPlayer();
            }],
            ['S', 'up', scene => {
                if(Root.player.actorCanMoveBy(0, 1, Root.level)) {
                    Root.player.actorMoveBy(0, 1, Root.level);
                }
                scene.centerOnPlayer();
            }],
            ['D', 'up', scene => {
                if(Root.player.actorCanMoveBy(1, 0, Root.level)) {
                    Root.player.actorMoveBy(1, 0, Root.level);
                }
                scene.centerOnPlayer();
            }],
        );
    }

    update() {
      
    }

    

}
