class ActionButtonsGui extends BaseSceneComponent {

    static make(scene) {
        const abg = new ActionButtonsGui(scene);
        this.align(scene, abg.container, {leftPerc: 0.5, topPerc: 0.5});
        return abg;
    }

    constructor(scene) {
        super();
        this.scene = scene;
        this.container = scene.add.container(0, 0);
        // up
        this.up = this.scene.add.sprite(0, -64, 'buttons').setAlpha(0.15).setInteractive().setScale(0.8, 0.8);
        const up = this.up;
        this.container.add(up);
        up.on('pointerover', event => {
            up.setAlpha(0.3);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            up.setAlpha(0.15);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            up.setAlpha(0.2);
        }).on('pointerup', event => {
            up.setAlpha(0.3);
            scene.performPlayerActionInDirection(0, -1);
        });
        // right
        this.right = this.scene.add.sprite(64, 0, 'buttons').setAlpha(0.15).setInteractive().setScale(0.8, 0.8);
        const right = this.right;
        this.container.add(right);
        right.on('pointerover', event => {
            right.setAlpha(0.3);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            right.setAlpha(0.15);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            right.setAlpha(0.2);
        }).on('pointerup', event => {
            right.setAlpha(0.3);
            scene.performPlayerActionInDirection(1, 0);
        });
        // down
        this.down = this.scene.add.sprite(0, 64, 'buttons').setAlpha(0.15).setInteractive().setScale(0.8, 0.8);
        const down = this.down;
        this.container.add(down);
        down.on('pointerover', event => {
            down.setAlpha(0.3);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            down.setAlpha(0.15);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            down.setAlpha(0.2);
        }).on('pointerup', event => {
            down.setAlpha(0.3);
            scene.performPlayerActionInDirection(0, 1);
        });
        // left
        this.left = this.scene.add.sprite(-64, 0, 'buttons').setAlpha(0.15).setInteractive().setScale(0.8, 0.8);
        const left = this.left;
        this.container.add(left);
        left.on('pointerover', event => {
            left.setAlpha(0.3);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            left.setAlpha(0.15);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            left.setAlpha(0.2);
        }).on('pointerup', event => {
            left.setAlpha(0.3);
            scene.performPlayerActionInDirection(-1, 0);
        });
        this.update();
    }

    update() {
        // up
        const upState = this.getButtonActionState(0, -1);
        if(upState === ACTION_BUTTON_STATE.NONE) {
            this.up.setAlpha(0).disableInteractive();
        } else {
            this.up.setAlpha(0.15).setInteractive();
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
            this.right.setAlpha(0).disableInteractive();
        } else {
            this.right.setAlpha(0.15).setInteractive();
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
            this.down.setAlpha(0).disableInteractive();
        } else {
            this.down.setAlpha(0.15).setInteractive();
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
            this.left.setAlpha(0).disableInteractive();
        } else {
            this.left.setAlpha(0.15).setInteractive();
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
        } else if(false) { // TODO monster or attackable container here
            return ACTION_BUTTON_STATE.ATTACK;
        } else {
            return ACTION_BUTTON_STATE.WALK;
        }
    }

    destroy() {
        this.container.destroy();
        return this;
    }

}