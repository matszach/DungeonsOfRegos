class GameScene extends BaseScene {

    constructor() {
        super('GameScene');
    }   

    preload() {
        this.loadSprites(
            'armors', 'boots', 'floors', 'helmets', 'necklaces', 
            'players', 'potions', 'rings', 'shields', 'stairs', 
            'walls', 'weapons', 'valuables', 'buttons'
        );
        this.loadImages(
            'player_silhouette'
        );
    }

    onCreate() {
        this.paused = false;
        this.level = Root.level;
        this.levelHolder = LevelHolder.make(this, Root.level, Root.player);  
        this.actionButtonGui = ActionButtonsGui.make(this);
        this.topButtons = GameViewTopButtons.make(this);
        this.centerOnPlayer();  
        this.setPlayerInControlControls();
    }

    centerOnPlayer() {
        this.levelHolder.moveTo(Root.player.x, Root.player.y);
    }

    performPlayerActionInDirection(x, y) {
        if(this.paused) {
            return;
        }
        x += Root.player.x; 
        y += Root.player.y;
        const field = Root.level.get(x, y);
        if(Root.player.actorCanMoveTo(x, y, Root.level)) {
            Root.player.actorMoveTo(x, y, Root.level);
            if(!!field.item && Root.player.inv.pickup(field.item.item)) {
                field.item.destroy();
                field.item = null;
            }
        }
        this.centerOnPlayer();
        this.actionButtonGui.update();
    }

    setPlayerInControlControls() {
        this.registerKeys(
            ['W', 'up', scene => scene.performPlayerActionInDirection(0, -1)],
            ['A', 'up', scene => scene.performPlayerActionInDirection(-1, 0)],
            ['S', 'up', scene => scene.performPlayerActionInDirection(0, 1)],
            ['D', 'up', scene => scene.performPlayerActionInDirection(1, 0)],
            ['C', 'up', scene => scene.toggleCharacterSheet()],
        );
    }

    setInventoryOpenControls() {
        this.registerKeys(
            ['C', 'up', scene => scene.toggleCharacterSheet()],
        );
    }

    toggleCharacterSheet() {
        if(!!this.characterSheet) {
            this.characterSheet.destroy();
            this.characterSheet = null;
            this.paused = false;
            this.setPlayerInControlControls();
        } else {
            this.characterSheet = CharacterSheetGui.make(this, Root.player);
            this.paused = true;
            this.setInventoryOpenControls();
        }
    }   
    
}
