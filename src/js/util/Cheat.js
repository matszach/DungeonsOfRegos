function cheat(...args) {
    switch(args[0]) {
        case 'nextlevel':
            Root.scene.goToNextLevel(); break;
        default: 
            console.warn('unrecognized command');
    }
}