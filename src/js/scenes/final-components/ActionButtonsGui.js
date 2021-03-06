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
        this.setButtonStateAndFrame(this.up, 0, -1, 0);
        this.setButtonStateAndFrame(this.right, 1, 0, 1);
        this.setButtonStateAndFrame(this.down, 0, 1, 2);
        this.setButtonStateAndFrame(this.left, -1, 0, 3);
    }

    setButtonStateAndFrame(button, x, y, frameIfMove) {
        const field = Root.level.get(Root.player.x + x, Root.player.y + y);
        if(!field || field.field.blocksMove) {
            button.disableInteractive().setAlpha(ActionButtonsGui.ALPHA.HIDDEN);
        } else {
            button.setInteractive().setAlpha(ActionButtonsGui.ALPHA.DEFAULT);
            if (!!field.actor) {
                button.setFrame(4);
            } else if(!!field.interactable) {
                button.setFrame(field.interactable.actionButtonFrame);
            } else {
                button.setFrame(frameIfMove);
            }
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