class FieldTypeMapBuilder {

    constructor(rng) {
        this.rng = rng;
        this._layout; // maze life relation layout
        this._roomLayout;
        this._fieldMap;
    }

    build(diff, depth, player) {
        this._initLayout(diff, depth, player);
        this._buildLayout();
        this._buildRoomLayout();
        this._buildFieldMap();
        return {
            fieldMap: this._fieldMap,
            rooms: this._roomLayout
        };
    }

    _initLayout(diff, depth, player) {
        const size = (5 + diff + depth);
        const lx = this.rng.int(0.4 * size, 0.6 * size);
        const ly = this.rng.int(0.4 * size, 0.6 * size);
        const layout = new Table2D(lx, ly);
        layout.assign((x, y) => {
            return {
                x: x, 
                y: y, 
                visited: false,
                root: false,
                possible: {
                    up: layout.has(x, y - 1),
                    left: layout.has(x - 1, y),
                    down: layout.has(x, y + 1),
                    right: layout.has(x + 1, y)
                },
                open: {
                    up: false, 
                    left: false,
                    down: false,
                    right: false
                },
                previous: null,
                next: null,
                end: false,
                depth: 0,
            };
        });
        this._layout = layout;
    }

    _buildLayout() {   
        const initialX = this.rng.int(0, this._layout._xSize - 1);
        const initialY = this.rng.int(0, this._layout._ySize - 1);
        let current = this._layout.get(initialX, initialY);
        current.visited = true;
        current.root = true;

        while (true) {

            // looking for possible ways to progress
            let possible = [];
            if(current.possible.up && !this._layout.get(current.x, current.y - 1).visited) {
                possible.push('UP');
            }
            if(current.possible.left && !this._layout.get(current.x - 1, current.y).visited) {
                possible.push('LEFT');
            }
            if(current.possible.down && !this._layout.get(current.x, current.y + 1).visited) {
                possible.push('DOWN');
            }
            if(current.possible.right && !this._layout.get(current.x + 1, current.y).visited) {
                possible.push('RIGHT');
            }
    
             // found at least one path
            if(possible.length > 0) {
                let dir = this.rng.pick(possible);
                let nextCell;
                if(dir == 'UP') {
                    nextCell = this._layout.get(current.x, current.y - 1);
                    current.open.up = true;
                    nextCell.open.down = true;
                } else if(dir == 'LEFT') {
                    nextCell = this._layout.get(current.x - 1, current.y);
                    current.open.left = true;
                    nextCell.open.right = true;
                } else if(dir == 'DOWN') {
                    nextCell = this._layout.get(current.x, current.y + 1);
                    current.open.down = true;
                    nextCell.open.up = true;
                } else if(dir == 'RIGHT') {
                    nextCell = this._layout.get(current.x + 1, current.y);
                    current.open.right = true;
                    nextCell.open.left = true;
                }
                nextCell.visited = true;
                nextCell.depth = current.depth + 1;
                current.next = nextCell;
                nextCell.previous = current;
                current = nextCell;

            // no paths found, backtrack
            } else {
                if(!current.next) {
                    current.end = true;
                }
                current = current.previous;
            }
    
            // is complete ?
            if (!current) {
                break;
            }
        } 

    }

    _buildRoomLayout() {
        const layout = this._layout;
        this._roomLayout = new Table2D(this._layout._xSize, this._layout._ySize).assign((x, y) => {
            const ofLayout = layout.get(x, y);
            return {
                left: 1 + x * 9,
                top: 1 + y * 9,
                right: 7 + x * 9,
                bottom: 7 + y * 9,
                centerX: 4 + x + 9,
                centerY: 4 + y + 9,
                root: ofLayout.root,
                end: ofLayout.end,
                depth: ofLayout.depth,
                openLeft: ofLayout.open.left,
                openUp: ofLayout.open.up,
                openRight: ofLayout.open.right,
                openDown: ofLayout.open.down
            };
        });
    }

    _buildFieldMap() {
        const fieldMap = new Table2D(this._layout._xSize * 9 , this._layout._ySize * 9).assign(() => {
            return FIELD_TEMPLATES.WALL.id;
        });
        this._roomLayout.iter(room => {
            for(let x = room.left; x <= room.right; x++) {
                for(let y = room.top; y <= room.bottom; y++) {
                    fieldMap.put(x, y, FIELD_TEMPLATES.FLOOR.id);
                }    
            }
            if(room.openDown) {
                let width = this.rng.pick([2, 2, 3, 3, 3, 4, 5, 7]);
                let pos = this.rng.int(0, 7 - width);
                for(let x = room.left + pos; x < room.left + pos + width; x++) {
                    for(let y = room.bottom + 1; y < room.bottom + 3; y++) {
                        fieldMap.put(x, y, FIELD_TEMPLATES.FLOOR.id);
                    }    
                }
            }
            if(room.openRight) {
                let width = this.rng.pick([2, 2, 3, 3, 3, 4, 5, 7]);
                let pos = this.rng.int(0, 7 - width);
                for(let x = room.right + 1; x < room.right + 3; x++) {
                    for(let y = room.top + pos; y < room.top + pos + width; y++) {
                        fieldMap.put(x, y, FIELD_TEMPLATES.FLOOR.id);
                    }    
                }
            }
        });
        this._fieldMap = fieldMap;
    }

}
