class RoomBuilder {

    constructor(rng) {
        this.rng = rng;
        this._nodes;
        this._entryRoom;
        this._exitRoom;
        this._keyRoom;
        this._regularRooms;
    } 

    build(fieldMap, roomInfo) {
        this._nodes = [];
        this._entryRoom = null;
        this._exitRoom = null;
        this._endRooms = [];
        this._regularRooms = [];
        this._sortRooms(roomInfo);
        this._buildEntryRoom(fieldMap);
        this._buildExitRoom(fieldMap);
        this._buildKeyRoom(fieldMap);
        this._buildRegularRooms(fieldMap);
        return {
            nodes: this._nodes
        };
    }

    _node(x, y, type, chance) {
        if(this.rng.chance(chance || 1)) {
            this._nodes.push({
                x: x,
                y: y,
                type: type
            });
        }
    }

    _sortRooms(roomInfo) {
        const rb = this;
        const endRooms = [];
        roomInfo.each(r => {
            if(r.root) {
                rb._entryRoom = r;
            } else if(r.end) {
                endRooms.push(r);
            } else {
                rb._regularRooms.push(r);
            }
        });
        this.rng.shuffle(endRooms);
        this.rng.shuffle(this._regularRooms);
        this._exitRoom = endRooms.pop();
        endRooms.push(this._regularRooms.pop());
        this.rng.shuffle(endRooms);
        this._keyRoom = endRooms.pop();
        this._regularRooms.push.apply(this._regularRooms, endRooms);
    }

    _buildEntryRoom(fieldMap) {
        const {centerX: cx, centerY: cy} = this._entryRoom;
        this._node(cx, cy, FIELD_TEMPLATES.STAIRS_UP);
        this._node(cx + 1, cy, NODE.PLAYER);
        this._node(cx + 2, cy + 2, NODE.ITEM_WEAK, 0.25);
        this._node(cx - 2, cy + 2, NODE.ITEM_WEAK, 0.25);
        this._node(cx + 2, cy - 2, NODE.ITEM_WEAK, 0.25);
        this._node(cx - 2, cy - 2, NODE.ITEM_WEAK, 0.25);
    }

    _buildExitRoom(fieldMap) {
        const {centerX: cx, centerY: cy} = this._exitRoom;
        this._node(cx, cy, FIELD_TEMPLATES.STAIRS_DOWN);
    }
    
    _buildKeyRoom(fieldMap) {
        const {centerX: cx, centerY: cy} = this._keyRoom;
        this._node(cx, cy, NODE.KEY);
        this._node(cx + 3, cy + 3, NODE.MONSTER_STRONG, 0.4);
        this._node(cx - 3, cy + 3, NODE.MONSTER_WEAK, 0.6);
        this._node(cx + 3, cy - 3, NODE.MONSTER_STRONG, 0.4);
        this._node(cx - 3, cy - 3, NODE.MONSTER_WEAK, 0.6);
    }

    _pickRoom() {
        const room = Object.assign({}, this.rng.pick(ROOM_TEMPLATES));

        // flip x
        if(this.rng.chance(0.5)) {
            room.walls.forEach(w => w.x = 6 - w.x);
            room.nodes.forEach(w => w.x = 6 - w.x);
        } 

        // flop y 
        if(this.rng.chance(0.5)) {
            room.walls.forEach(w => w.y = 6 - w.y);
            room.nodes.forEach(w => w.y = 6 - w.y);
        } 

        // rotate
        const rotation = this.rng.pick([0, 90, 180, 270]);
        if(rotation === 0) {
            // no need
        } else if(rotation === 90) {
            room.walls.forEach(w => {
                const newX = 6 - w.y;
                const newY = w.x;
                w.x = newX;
                w.y = newY; 
            });
            room.nodes.forEach(w => {
                const newX = 6 - w.y;
                const newY = w.x;
                w.x = newX;
                w.y = newY; 
            });
        } else if(rotation === 180) {
            room.walls.forEach(w => {
                w.x = 6 - w.x;
                w.y = 6 - w.y;
            });
            room.nodes.forEach(w => {
                w.x = 6 - w.x;
                w.y = 6 - w.y;
            });
        } else if(rotation === 270) {
            room.walls.forEach(w => {
                const newX = 6 - w.y;
                const newY = w.x;
                w.x = newX;
                w.y = newY; 
            });
            room.nodes.forEach(w => {
                const newX = 6 - w.y;
                const newY = w.x;
                w.x = newX;
                w.y = newY; 
            });
        }
        return room;
    }

    _buildRegularRooms(fieldMap) {
        const rb = this;
        for(let i = 0; i < this._regularRooms.length; i++) {
            const room = this._regularRooms[i];
            const {left, top} = room; 
            const template = this._pickRoom();
            template.walls.forEach(w => fieldMap.put(left + w.x, top + w.y, 1));
            template.nodes.forEach(n => rb._node(left + n.x, top + n.y, NODE[n.key]));
        }
    }

}

