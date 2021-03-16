class ScoreRow extends BaseSceneComponent {

    static make(scene, top, name, valueKey) {
        const nameText = scene.add.text(0, 0, `${name}:`).setOrigin(1, 0.5).setColor('#ddd').setFontSize(20);
        const value = parseInt(Root.score.get(valueKey));
        const valueText = scene.add.text(0, 0, value).setOrigin(0, 0.5).setColor('#ddd').setFontSize(20);
        this.align(scene, nameText, {leftPerc: 0.5, topPerc: top});
        this.align(scene, valueText, {leftPerc: 0.55, topPerc: top});
    }

}