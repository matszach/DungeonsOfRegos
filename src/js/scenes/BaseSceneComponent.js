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

}