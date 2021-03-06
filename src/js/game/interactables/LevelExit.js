class LevelExit extends Interactable {

    constructor() {
        super('pit', 0, 5);
        this.isOpened = false;
    }

    onInteract(player) {
        if(this.isOpened) {
            Root.scene.goToNextLevel();
        } else {
            if(player.inv.has({type: 'KEY', internal: 'NEXT_LEVEL_KEY'})) {
                this.isOpened = true;
                this.setFrame(1);
                this.actionButtonFrame = 6;
            } 
        }
    }
    
}