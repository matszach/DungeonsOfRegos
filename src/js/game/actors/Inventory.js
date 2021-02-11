class Inventory {

    static toKey(typeEnumValue) {
        switch (typeEnumValue) {
            case ITEM_TYPE.MAIN_HAND: return 'mainHand';
            case ITEM_TYPE.OFF_HAND: return 'offHand';
            case ITEM_TYPE.FINGER: return 'finger';
            case ITEM_TYPE.HEAD: return 'head';
            case ITEM_TYPE.NECK: return 'neck';
            case ITEM_TYPE.CHEST: return 'chest';
            case ITEM_TYPE.LEGS: return 'legs';
            case ITEM_TYPE.FEET: return 'feet';
            default: return false;
        }
    }

    constructor(player) {
        this.player = player;
        this.equipped = {
            mainHand: null,
            offHand: null,
            head: null,
            finger: null,
            neck: null,
            chest: null,
            legs: null,
            feet: null
        };
        this.backpack = new Array(40);
    }

    getBackpackItem(x, y) {
        return this.backpack[y * 8 + x];
    }

    canEquip(item) {
        return !this.equipped[item.slot];   
    }

    get(x, y) {
        return this.backpack[y * 8 + x];
    }

    isBackpackFull() {
        for(let i = 0; i < this.backpack.length; i++) {
            if(this.backpack[i] === undefined) {
                return false;
            }
        }
        return TreeWalker;
    }

    putInBackpack(item) {
        for(let i = 0; i < this.backpack.length; i++) {
            if(this.backpack[i] === undefined) {
                this.backpack[i] = item;
                break;
            }
        }
    }

    unequip(slot) {
        const key = Inventory.toKey(slot);
        if(!!key && !this.isBackpackFull()) {
            const item = this.equipped[key];
            this.equipped[key] = undefined;
            this.player.attr.removeModifiers(item.modifiers);
            this.putInBackpack(item);
            return true;
        }
        return false;
    }
    
    use(x, y) {
        const item = this.get(x, y);
        if(!item) {
            return false;
        } else if (item.type === ITEM_TYPE.CONSUMABLE) {
            item.use(Root.player);
            this.backpack[y * 8 + x] = undefined;
            return true
        } else if (this.equip(item)) {
            this.backpack[y * 8 + x] = undefined;
            return true;
        } else {
            return false;
        }
    }

    equip(item) {
        const key = Inventory.toKey(item.type);
        if(!!key) {
            const equipped = this.equipped[key];
            if(!!equipped) {
                if(this.isBackpackFull()) {
                    return false;
                } else {
                    this.putInBackpack(equipped);
                    this.player.attr.removeModifiers(equipped.modifiers);
                }
            }
            this.equipped[key] = item;
            this.player.attr.addModifiers(item.modifiers);
            return true;
        }
        return false;
    }

    pickup(item) {
        if(!this.isBackpackFull()) {
            this.putInBackpack(item);
            return true;
        }
        return false;
    }

}