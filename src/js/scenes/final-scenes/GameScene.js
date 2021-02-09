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
        this.loadImages(
            'player_silhouette'
        );
    }

    onCreate() {
        this.level = Root.level;
        this.levelHolder = LevelHolder.make(this, Root.level, Root.player);  
        this.centerOnPlayer();  
        this.setPlayerInControlControls();
    }

    centerOnPlayer() {
        this.levelHolder.moveTo(Root.player.x, Root.player.y);
    }

    performPlayerActionInDirection(x, y) {
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
    }

    setPlayerInControlControls() {
        this.registerKeys(
            ['W', 'up', scene => scene.performPlayerActionInDirection(0, -1)],
            ['A', 'up', scene => scene.performPlayerActionInDirection(-1, 0)],
            ['S', 'up', scene => scene.performPlayerActionInDirection(0, 1)],
            ['D', 'up', scene => scene.performPlayerActionInDirection(1, 0)],
            ['I', 'up', scene => scene.toogleInventory()],
        );
    }

    setInventoryOpenControls() {
        this.registerKeys(
            ['I', 'up', scene => scene.toogleInventory()],
        );
    }

    toogleInventory() {
        if(!!this.inventoryGui) {
            this.inventoryGui.destroy();
            this.inventoryGui = null;
            this.setPlayerInControlControls();
        } else {
            this.inventoryGui = InventoryGui.make(this, Root.player);
            this.setInventoryOpenControls();
        }
    }   
    
}
