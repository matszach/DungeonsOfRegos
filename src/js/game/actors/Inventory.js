class Inventory {

    constructor() {
        this.equipped = new Array(Object.keys(ITEM_TYPE).length);
        this.backpack = new Array(30);
    }
    
    canEquip(item) {
        return !this.equipped[item.slot];   
    }

    isBackpackFull() {
        for(let i = 0; i < this.backpack.length; i++) {
            if(this.backpack[i] === null) {
                return true;
            }
        }
        return false;
    }

    putInBackpack(item) {
        for(let i = 0; i < this.backpack.length; i++) {
            if(this.backpack[i] === null) {
                this.backpack[i] = item;
                break;
            }
        }
    }

    unequip(slot) {
        const item = this.equipped[slot];
        this.equipped[slot] = null;
        return item;
    }

    equip(item) {
        this.equipped[item.slot] = item;
    }

    canPickup() {
        return this.canEquip() || !this.isBackpackFull();
    }

    pickup(item) {
        if (this.canEquip(item)) {
            this.equip(item);
            return true;
        } else if(!this.isBackpackFull()) {
            this.putInBackpack(item);
            return true;
        }
        return false;
    }

}