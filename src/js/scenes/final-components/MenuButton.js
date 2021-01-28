class MenuButton extends BaseSceneComponent {

    static make(scene, top, value, keyCode, action) {

        // definitions
        const body = scene.add.rectangle(0, 0, 300, 40).setOrigin(0.5, 0.5);
        const over = scene.add.rectangle(0, 0, 260, 45, 0x000000).setOrigin(0.5, 0.5);
        const text = scene.add.text(0, 0, `${value} [${keyCode}]`).setOrigin(0.5, 0.5).setColor('#ddd').setFontSize(30);
        this.align(scene, body, {leftPerc: 0.5, topPerc: top});
        this.align(scene, over, {leftPerc: 0.5, topPerc: top});
        this.align(scene, text, {leftPerc: 0.5, topPerc: top});

        // action 
        if(typeof action === 'string') { // passed string value of "->SceneName"
            const sceneName = action.substring(2);
            action = s => s.toScene(sceneName);
        } 

        // button hover and press
        body.setInteractive().on('pointerover', () => {
            body.setStrokeStyle(2, 0x999999);
            text.setColor('#fff');
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            body.setStrokeStyle(0).setFillStyle(null);
            text.setColor('#ddd');
            this.scale(1, body, over, text)
            MenuButton.cursor('default');
        }).on('pointerdown', () => {
            this.scale(0.95, body, over, text)
        }).on('pointerup', () => {
            this.scale(1, body, over, text)
            action(scene);
        });

        // key press
        const key = scene.getKey(keyCode);
        key.onDown = () => {
            this.scale(0.95, body, over, text)
        };
        key.onUp = () => {
            this.scale(1, body, over, text)
            action(scene);
        };
    }

}