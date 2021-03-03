class ActionButtonsGui extends BaseSceneComponent {

    static ALPHA = {
        DEFAULT: 0.80,
        HIDDEN: 0.00
    }

    static SCALE = {
        DEFAULT: 0.8,
        HOVER: 0.9,
        ACTIVE: 0.7
    }

    static make(scene) {
        const abg = new ActionButtonsGui(scene);
        this.align(scene, abg.container, {leftPerc: 0.5, topPerc: 0.5});
        return abg;
    }

    constructor(scene) {
        super();
        this.scene = scene;
        this.container = scene.add.container(0, 0).setScale(1.0, 1.0);
        // up
        this.up = this.scene.add.sprite(0, -64, 'action_buttons').setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive().setScale(ActionButtonsGui.SCALE.DEFAULT);
        const up = this.up;
        this.container.add(up);
        up.on('pointerover', event => {
            up.setScale(ActionButtonsGui.SCALE.HOVER);
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            up.setScale(ActionButtonsGui.SCALE.DEFAULT);
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            up.setScale(ActionButtonsGui.SCALE.ACTIVE);
        }).on('pointerup', event => {
            up.setScale(ActionButtonsGui.SCALE.HOVER);
            scene.performPlayerActionInDirection(0, -1);
        });
        // right
        this.right = this.scene.add.sprite(64, 0, 'action_buttons').setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive().setScale(ActionButtonsGui.SCALE.DEFAULT);
        const right = this.right;
        this.container.add(right);
        right.on('pointerover', event => {
            right.setScale(ActionButtonsGui.SCALE.HOVER);
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            right.setScale(ActionButtonsGui.SCALE.DEFAULT);
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            right.setScale(ActionButtonsGui.SCALE.ACTIVE);
        }).on('pointerup', event => {
            right.setScale(ActionButtonsGui.SCALE.HOVER);
            scene.performPlayerActionInDirection(1, 0);
        });
        // down
        this.down = this.scene.add.sprite(0, 64, 'action_buttons').setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive().setScale(ActionButtonsGui.SCALE.DEFAULT);
        const down = this.down;
        this.container.add(down);
        down.on('pointerover', event => {
            down.setScale(ActionButtonsGui.SCALE.HOVER);
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            down.setScale(ActionButtonsGui.SCALE.DEFAULT);
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            down.setScale(ActionButtonsGui.SCALE.ACTIVE);
        }).on('pointerup', event => {
            down.setScale(ActionButtonsGui.SCALE.HOVER);
            scene.performPlayerActionInDirection(0, 1);
        });
        // left
        this.left = this.scene.add.sprite(-64, 0, 'action_buttons').setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive().setScale(ActionButtonsGui.SCALE.DEFAULT);
        const left = this.left;
        this.container.add(left);
        left.on('pointerover', event => {
            left.setScale(ActionButtonsGui.SCALE.HOVER);
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            left.setScale(ActionButtonsGui.SCALE.DEFAULT);
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            left.setScale(ActionButtonsGui.SCALE.ACTIVE);
        }).on('pointerup', event => {
            left.setScale(ActionButtonsGui.SCALE.HOVER);
            scene.performPlayerActionInDirection(-1, 0);
        });
        this.update();
    }

    update() {
        // up
        const upState = this.getButtonActionState(0, -1);
        if(upState === ACTION_BUTTON_STATE.NONE) {
            this.up.setAlpha(ActionButtonsGui.ALPHA.HIDDEN).disableInteractive();
        } else {
            this.up.setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive();
            if(upState === ACTION_BUTTON_STATE.WALK) {
                this.up.setFrame(0);
            } else if(upState === ACTION_BUTTON_STATE.ATTACK) {
                this.up.setFrame(4);
            } else if(upState === ACTION_BUTTON_STATE.EXIT) {
                this.up.setFrame(5);
            }
        }
        // right
        const rightState = this.getButtonActionState(1, 0);
        if(rightState === ACTION_BUTTON_STATE.NONE) {
            this.right.setAlpha(ActionButtonsGui.ALPHA.HIDDEN).disableInteractive();
        } else {
            this.right.setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive();
            if(rightState === ACTION_BUTTON_STATE.WALK) {
                this.right.setFrame(1);
            } else if(rightState === ACTION_BUTTON_STATE.ATTACK) {
                this.right.setFrame(4);
            } else if(rightState === ACTION_BUTTON_STATE.EXIT) {
                this.right.setFrame(5);
            }
        }
        // down
        const downState = this.getButtonActionState(0, 1);
        if(downState === ACTION_BUTTON_STATE.NONE) {
            this.down.setAlpha(ActionButtonsGui.ALPHA.HIDDEN).disableInteractive();
        } else {
            this.down.setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive();
            if(downState === ACTION_BUTTON_STATE.WALK) {
                this.down.setFrame(2);
            } else if(downState === ACTION_BUTTON_STATE.ATTACK) {
                this.down.setFrame(4);
            } else if(downState === ACTION_BUTTON_STATE.EXIT) {
                this.down.setFrame(5);
            }
        }
        // left
        const leftState = this.getButtonActionState(-1, 0);
        if(leftState === ACTION_BUTTON_STATE.NONE) {
            this.left.setAlpha(ActionButtonsGui.ALPHA.HIDDEN).disableInteractive();
        } else {
            this.left.setAlpha(ActionButtonsGui.ALPHA.DEFAULT).setInteractive();
            if(leftState === ACTION_BUTTON_STATE.WALK) {
                this.left.setFrame(3);
            } else if(leftState === ACTION_BUTTON_STATE.ATTACK) {
                this.left.setFrame(4);
            } else if(leftState === ACTION_BUTTON_STATE.EXIT) {
                this.left.setFrame(5);
            }
        }
    }

    getButtonActionState(x, y) {
        const field = Root.level.get(Root.player.x + x, Root.player.y + y);
        if(!field || field.field.blocksMove) {
            return ACTION_BUTTON_STATE.NONE;
        } else if(false) { // TODO exit here
            return ACTION_BUTTON_STATE.EXIT;
        } else if(field.actor) {
            return ACTION_BUTTON_STATE.ATTACK;
        } else {
            return ACTION_BUTTON_STATE.WALK;
        }
    }

    toggleVisibility() {
        this.visible = this.visible === undefined ? false : !this.visible;
        this.container.setAlpha(this.visible ? 1 : 0);
    }

    destroy() {
        this.container.destroy();
        return this;
    }

}