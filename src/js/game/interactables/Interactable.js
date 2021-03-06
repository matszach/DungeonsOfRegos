class Interactable extends Entity {

    constructor(sprite, frame, actionButtonFrame) {
        super(sprite, frame);
        this.actionButtonFrame = actionButtonFrame;
    }

    onInteract(player) {
        // abstract
    }

}