class Level {

    constructor(x, y, player, diff, depth) {
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
        this.diff = diff;
        this.depth = depth;

        // reference holders
        this.items = [];
        this.monsters = [];
        this.interactables = [];
    }

    iter(callback) {
        this.fields.iter(callback);
        return this;
    }

    get(x, y) {
        return this.fields.safeGet(x, y);
    }

    prepareReferences() {
        this.items = [];
        this.monsters = [];
        this.interactables = [];
        const level = this;
        this.iter(f => {
            if(!!f.item) {
                level.items.push(f.item);
            }
            if(!!f.actor && f.actor.isMonster) {
                level.monsters.push(f.actor);
            }
            if(!!f.interactable) {
                level.interactables.push(f.interactable);
            }
        });
    }

}