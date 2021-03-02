class LevelFactory {

    constructor() {
        this.ftmBuilder = new FieldTypeMapBuilder();
        this.roomBuilder = new RoomBuilder();
        this.itemFactory = new ItemFactory();
        this.monsterFactory = new MonsterFactory();
        this.fieldFactory = new FieldFactory();
        this.level = null;
    }

    seed(seed) {
        Root.rng = new Rng(seed);
        return this;
    }

    asyncCreate(diff, depth, player, callback) {
        const factory = this;
        setTimeout(() => callback(factory.create(diff, depth, player)));
        return this;
    }

    create(diff, depth, player) {
        const {fieldMap, rooms} = this.ftmBuilder.build(diff, depth, player);
        const {nodes} = this.roomBuilder.build(fieldMap, rooms);
        this.level = new Level(fieldMap._xSize, fieldMap._ySize, player);
        this._createFields(fieldMap);
        this._createItems(nodes);
        this._createInteractables(nodes);
        this._createMonsters(nodes);
        this._placePlayer(nodes, player);
        this.level.prepareReferences();
        return this.level;
    }

    _createFields(fieldMap) {
        const ff = this.fieldFactory;
        this.level.iter((f, x, y) => {
            f.field = ff.create(x, y, fieldMap);
        });
    }

    _createItems(nodes) {
        const itf = this.itemFactory;
        const level = this.level;
        nodes.filter(n => [NODE.ITEM_WEAK, NODE.ITEM_STRONG].includes(n.type)).forEach(n => {
            level.fields.get(n.x, n.y).item = itf.create(n);
        });
    }

    _createInteractables(nodes) {

    }

    _createMonsters(nodes) {
        const mf = this.monsterFactory;
        const level = this.level;
        nodes.filter(n => [NODE.MONSTER_WEAK, NODE.MONSTER_STRONG].includes(n.type)).forEach(n => {
            level.fields.get(n.x, n.y).actor = mf.create(n);
        });
    }

    _placePlayer(nodes, player) {
        const node = nodes.filter(n => n.type === NODE.PLAYER)[0];
        player.placeAt(node.x, node.y);
    }

}

