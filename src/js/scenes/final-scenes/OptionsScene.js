class OptionsScene extends MenuScene {

    constructor() {
        super('OptionsScene');
    } 
    
    onCreate() {
        MenuTitle.make(this, 0.2, 'OPTIONS');
        MenuButton.makes(this, [
            [0.35, 'Fullscreen', 'F', s => s.toggleFullscreen()],
            [0.50, 'Sound', 'S', s => s.toggleSound()],
            [0.65, 'Return', 'R', '->MainMenuScene']
        ]);
    }

    toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    toggleSound() {
        // TODO
    }
}