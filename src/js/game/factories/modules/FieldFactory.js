class FieldFactory {

    create(x, y, fieldMap) {
        const id = fieldMap.get(x, y);
        switch(id) {
            case FIELD_TEMPLATES.WALL.id: return this._createWall(x, y, fieldMap);
            case FIELD_TEMPLATES.FLOOR.id: default: return this._createFloor(x, y, fieldMap);
        }
    }

    _createWall(x, y, fieldMap) {
        const w = new WallField();
        const L = fieldMap.safeGet(x - 1, y, FIELD_TEMPLATES.WALL.id);
        const LT = fieldMap.safeGet(x - 1, y - 1, FIELD_TEMPLATES.WALL.id);
        const T = fieldMap.safeGet(x, y - 1, FIELD_TEMPLATES.WALL.id);
        const TR = fieldMap.safeGet(x + 1, y - 1, FIELD_TEMPLATES.WALL.id);
        const R = fieldMap.safeGet(x + 1, y, FIELD_TEMPLATES.WALL.id);
        const RD = fieldMap.safeGet(x + 1, y + 1, FIELD_TEMPLATES.WALL.id);
        const D = fieldMap.safeGet(x, y + 1, FIELD_TEMPLATES.WALL.id);
        const DL = fieldMap.safeGet(x - 1, y + 1, FIELD_TEMPLATES.WALL.id);
        w.setFrame(this._pickSprite(L, LT, T, TR, R, RD, D, DL));
        return w;
    }

    _pickSprite(L, LT, T, TR, R, RD, D, DL) {
        if (L) {
            if (T) {
                if (R) {
                    if (D) {
                        if (!LT) {
                            return 17;
                        } else if (!TR) {
                            return 18;
                        } else if (!RD) {
                            return 19;
                        } else if (!DL) {
                            return 16;
                        } else {
                            return 8; // L, T, R, D
                        }
                    } else {
                        return 0; // L, T, R
                    }
                } else if (D) {
                    return 3; // L, T, D
                } else {
                    return 7; // L, T
                }
            } else if (R) {
                if (D) {
                    return 2; // L, R, D
                } else {
                    return 10; // L, R
                }
            } else if (D) {
                return 6; // L, D
            } else {
                return 15; // L
            }
        } else if (T) {
            if (R) {
                if (D) {
                    return 1; // T, R, D
                } else {
                    return 4; // T, R
                }
            } else if (D) {
                return 11; // T, D
            } else {
                return 12; // T
            }
        } else if (R) {
            if (D) {
                return 5; // R, D
            } else {
                return 13; // R
            }
        } else if (D) {
            return 14; // D
        } else {
            return 9; // NONE
        }
    }

    _createFloor(x, y, fieldMap) {
        const f = new FloorField();
        f.setFrame(Root.rng.int(0, 31));
        return f;
    }

}