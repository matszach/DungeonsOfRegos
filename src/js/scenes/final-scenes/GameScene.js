class GameScene extends BaseScene {

    constructor() {
        super('GameScene');
    }   

    preload() {
        this.loadSprites(
            'armors', 'boots', 'floors', 'helmets', 'necklaces', 
            'players', 'potions', 'rings', 'shields', 'pit', 
            'walls', 'weapons', 'weapons2', 'valuables', 'pants', 
            'monsters', 'action_buttons', 'top_buttons', 'keys'
        );
        this.loadImages(
            'player_silhouette', 'fog_of_war', 'close_button', 'trashcan_button'
        );
    }

    onCreate() {
        this.paused = false;
        this.playerActionBlock = false;
        this.level = Root.level;
        this.levelHolder = LevelHolder.make(this, Root.level, Root.player);  
        this.fogOfWar = FogOfWar.make(this);
        this.actionButtonGui = ActionButtonsGui.make(this);
        this.topButtons = GameViewTopButtons.make(this);
        this.centerOnPlayer();  
        this.setPlayerInControlControls();
        Reveal.make(this);
    }

    reload() {
        this.levelHolder.destroy();
        this.fogOfWar.destroy();
        this.actionButtonGui.destroy(); // FIXME visibility should persist
        this.topButtons.destroy();
        this.onCreate();
    }

    doFrame() {
        this.levelHolder.tickAnimations();
    }

    centerOnPlayer() {
        this.levelHolder.moveTo(Root.player.x, Root.player.y);
    }

    performPlayerActionInDirection(x, y) {
        if(this.paused || this.playerActionBlock) {
            return;
        }
        Root.player.doTurn(x, y);
        this.centerOnPlayer();
        this.actionButtonGui.update();
        this.updateVisibility();
        this.doMonsterTurns();
    }

    doMonsterTurns() {
        const scene = this;
        scene.playerActionBlock = true;
        setTimeout(() => {
            Root.level.monsters = Root.level.monsters.filter(m => !m.expired);
            Root.level.monsters.forEach(m => m.doTurn());
            scene.actionButtonGui.update();
            scene.updateVisibility();
            setTimeout(() => {
                scene.playerActionBlock = false;
                if(!Root.player.attr.alive()) { // player has died
                    scene.toScene('GameOverScene');
                }
            }, 80);
        }, 20);
    }

    setPlayerInControlControls() {
        this.registerKeys(
            [['W', 'UP'], 'up', scene => scene.performPlayerActionInDirection(0, -1)],
            [['A', 'LEFT'], 'up', scene => scene.performPlayerActionInDirection(-1, 0)],
            [['S', 'DOWN'], 'up', scene => scene.performPlayerActionInDirection(0, 1)],
            [['D', 'RIGHT'], 'up', scene => scene.performPlayerActionInDirection(1, 0)],
            ['C', 'up', scene => scene.toggleCharacterSheet()],
            ['P', 'up', scene => scene.togglePauseMenu()],
        );
    }

    setInventoryOpenControls() {
        this.registerKeys(
            [['C', 'ESC'], 'up', scene => scene.toggleCharacterSheet()],
        );
    }

    setPauseMenuControls() {
        this.registerKeys(
            [['P', 'ESC'], 'up', scene => scene.togglePauseMenu()],
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
            if(!!this.pauseMenu) {
                this.pauseMenu.destroy();
                this.pauseMenu = null;
            }
            this.setInventoryOpenControls();
        }
    }   

    togglePauseMenu() {
        if(!!this.pauseMenu) {
            this.pauseMenu.destroy();
            this.pauseMenu = null;
            this.paused = false;
            this.setPlayerInControlControls();
        } else {
            this.pauseMenu = PauseMenuGui.make(this);
            this.paused = true;
            if(!!this.characterSheet) {
                this.characterSheet.destroy();
                this.characterSheet = null;
            }
            this.setPauseMenuControls();
        }
    }  

    goToNextLevel() {
        const scene = this;
        const levelFactory = new LevelFactory();
        Root.player.prepareForNextLevel();
        levelFactory.asyncCreate(Root.level.diff, Root.level.depth + 1, Root.player, level => {
            Root.level = level;
            scene.reload();
        });
    }
    
    updateVisibility() {
        Root.scene.fogOfWar.update();
    }

}
