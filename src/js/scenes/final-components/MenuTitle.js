class MenuTitle extends MenuButton {

    static make(scene, top, value) {
        const text = scene.add.text(0, 0, `${value}`).setOrigin(0.5, 0.5).setColor('#ddd').setFontSize(80);
        this.align(scene, text, {leftPerc: 0.5, topPerc: top});
    } 

}