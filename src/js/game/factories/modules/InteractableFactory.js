class InteractableFactory {

    create(node) {
        if(node.type === NODE.EXIT) {
            return new LevelExit();
        }
    }
    
}
