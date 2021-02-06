class PlayerFactory {
    
    create(key) {
        const player = new Player(PC_TEMPLATES[key]);
        this._giveStartingInventory(player);
        return player;
    }

    _giveStartingInventory(player) {

    }
    
}