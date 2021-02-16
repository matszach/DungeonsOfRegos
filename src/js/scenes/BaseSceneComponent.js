class BaseSceneComponent {

    static make(scene, ...args) {
        return {};
    }

    static makes(scene, argsList) {
        argsList.forEach(args => {
            this.make(scene, ...args);
        }, this);
    }

    static align(scene, component, args) {
        scene.align(component, args);
        scene.registerResizeEvent(s => s.align(component, args));
    }

    static scale(scale, ...elements) {
        elements.forEach(e => e.setScale(scale));
    }

    static cursor(type) {
        Game.canvas.style.cursor = type || 'default';
    }

    static closeButton(x, y, scene, callback) {
        const button = scene.add.sprite(x, y, 'close_button').setAlpha(0.5).setScale(0.5, 0.5);
        button.setInteractive().on('pointerover', event => {
            button.setAlpha(0.7);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            button.setAlpha(0.5);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            button.setAlpha(0.9);
        }).on('pointerup', event => {
            callback();
        });
        return button;
    }

}