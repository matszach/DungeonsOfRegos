class CharacterSelectButton extends BaseSceneComponent {

    static make(scene, x, y, characterKey) {

        // definitions
        const body = scene.add.rectangle(0, 0, 150, 200, 0x222222).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x555555);
        const container = scene.add.container(0, 0);
        container.add(body);
        this.align(scene, container, {xCenterPx: x, topPerc: y});

        // character info
        const characterInfo = PC_TEMPLATES[characterKey];
        if(!!characterInfo) {
            const name = scene.add.text(0, -88, characterInfo.name).setOrigin(0.5, 0.5);
            const characterSprite = scene.add.sprite(0, -30, characterInfo.spriteset).setOrigin(0.5, 0.5).setFrame(characterInfo.frame).setScale(1.5);
            container.add(name).add(characterSprite);
            this.attributeBar(scene, container, characterInfo, 'might', 0xff0000, -56);
            this.attributeBar(scene, container, characterInfo, 'agility', 0x6600ff, -28);
            this.attributeBar(scene, container, characterInfo, 'health', 0x00ff00, 0);
            this.attributeBar(scene, container, characterInfo, 'senses', 0x0066ff, 28);
            this.attributeBar(scene, container, characterInfo, 'luck', 0xffff00, 56);
        }

        // hover and click actions
        body.setInteractive().on('pointerover', () => {
            body.setStrokeStyle(2, 0x999999);
            MenuButton.cursor('pointer');
        }).on('pointerout', () => {
            body.setStrokeStyle(2, 0x555555)
            MenuButton.cursor('default');
            this.scale(1, container)
        }).on('pointerdown', () => {
            this.scale(0.95, container)
        }).on('pointerup', () => {
            this.scale(1, container)
            scene.startNewGame(characterKey);
        });
    }

    static attributeBar(scene, container, characterInfo, attrName, color, xOffset) {
        const v = characterInfo[attrName];
        const shade = scene.add.rectangle(xOffset + 3, 80, 20, v/2, 0x111111).setOrigin(0.5, 1);
        const rect = scene.add.rectangle(xOffset, 77, 20, v/2, color).setOrigin(0.5, 1);
        const text = scene.add.text(xOffset, 90, v).setOrigin(0.5, 0.5);
        container.add(shade).add(rect).add(text);
    }

}
