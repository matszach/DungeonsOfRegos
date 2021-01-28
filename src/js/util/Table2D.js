class Table2D {

    constructor(x, y) {
        this._xSize = x;
        this._ySize = y;
        this._arr = new Array(x * y);
    }

    assign(assigner) {
        for(let x = 0; x < this._xSize; x++) {
            for(let y = 0; y < this._ySize; y++) {
                const index = this._xSize * y + x;
                this._arr[index] = assigner(x, y, this._arr[index]);
            }
        }
        return this;
    }

    iter(callback) {
        for(let x = 0; x < this._xSize; x++) {
            for(let y = 0; y < this._ySize; y++) {
                const index = this._xSize * y + x;
                callback(this._arr[index], x, y);
            }
        }
        return this;
    }

    each(callback) {
        this._arr.forEach(callback);
    }

    put(x, y, value) {
        this._arr[this._xSize * y + x] = value;
        return this;
    }

    get(x, y) {
        return this._arr[this._xSize * y + x];
    }

    has(x, y) {
        return (
            x >= 0 && 
            y >= 0 &&
            x <= this._xSize - 1 &&
            y <= this._ySize - 1
        );
    }

    safeGet(x, y, def) {
        return this.has(x, y) ? this.get(x, y) : def;
    }

}
