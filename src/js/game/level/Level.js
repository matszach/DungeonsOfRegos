class Level {

    constructor(x, y, player) {
        this.player = player;
        this.scene;
        this.container;
        this.fields = new Table2D(x, y).assign((x, y, v) => {
            return {
                field: null,
                actor: null, 
                interactable: null,
                item: null
            };
        });
    }

    iter(callback) {
        this.fields.iter(callback);
        return this;
    }

    get(x, y) {
        return this.fields.safeGet(x, y);
    }

}