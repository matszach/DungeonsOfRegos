class Reveal extends BaseSceneComponent {

    static make(scene) {
        const container = scene.add.container(0, 0);
        this.align(scene, container, {leftPerc: 0.5, topPerc: 0.5});
        const mask = scene.add.graphics({x: 0, y: 0});
        container.add(mask);
        mask.fillStyle(0x000000);
        mask.beginPath();
        mask.moveTo(-2000, -2000);
        mask.lineTo(0, -2000);
        mask.lineTo(0, -200);
        mask.lineTo(-50, 0);
        mask.lineTo(0, 50);
        mask.lineTo(50, 0);
        mask.lineTo(0, -50);
        mask.lineTo(-50, 0);
        mask.lineTo(0, -2000);
        mask.lineTo(2000, -2000);
        mask.lineTo(2000, 2000);
        mask.lineTo(-2000, 2000);
        mask.closePath();
        mask.fillPath();
        let scale = 1;
        let angle = 0;
        const interval = setInterval(() => {
            scale += 0.1; 
            angle += 0.2;
            mask.setScale(scale);
            mask.setAngle(angle);
            if(scale > 50) {
                container.destroy();
                clearInterval(interval);
            }
        }, 5);
    }


}