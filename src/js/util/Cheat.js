function cheat(...args) {
    switch(args[0]) {

        case 'nextlevel':
            Root.scene.goToNextLevel(); break;

        case 'nofog':
            Root.scene.fogOfWar.destroy(); break;

        case 'power':
            Root.player.attr.base = {
                might: 999,
                agility: 999,
                health: 999,
                senses: 999,
                luck: 999,
                defence: 999
            }; 
            Root.scene.updateVisibility();
            break;

        default: 
            console.warn('unrecognized command');
    }
}