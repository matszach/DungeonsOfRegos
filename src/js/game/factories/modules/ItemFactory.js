class ItemFactory {

    static ALL_ITEMS = [
        ...Object.values(APPAREL_TEMPLATES), 
        ...Object.values(WEAPON_TEMPLATES), 
        ...Object.values(CONSUMABLE_TEMPLATES), 
        ...Object.values(VALUABLE_TEMPLATES)
    ];

    _calcRarity(common, uncommon, rare, epic, legendary) {
        return Root.rng.weightedPick(
            ['COMMON', common],
            ['UNCOMMON', uncommon],
            ['RARE', rare],
            ['EPIC', epic],
            ['LEGENDARY', legendary]
        );
    }

    _calcType(mainHand, offHand, head, chest, legs, feet, neck, finger, consumable, valuable) {
        return Root.rng.weightedPick(
            ['MAIN_HAND', mainHand],
            ['OFF_HAND', offHand],
            ['HEAD', head],
            ['CHEST', chest],
            ['LEGS', legs],
            ['FEET', feet],
            ['NECK', neck],
            ['FINGER', finger],
            ['CONSUMABLE', consumable],
            ['VALUABLE', valuable]
        );
    }

    _toItem(template) {
        switch (template.type) {
            case 'VALUABLE': return new Valuable(template);
            case 'MAIN_HAND': return new Weapon(template);
            case 'CONSUMABLE': return new Consumable(template);
            case 'KEY': return new Key(template);
            default: return new Equippable(template);
        }
    }

    pick(rarityInfo, typeInfo) {
        const typeKey = this._calcType(...typeInfo);
        const rarityKey = this._calcRarity(...rarityInfo);
        const options = ItemFactory.ALL_ITEMS.filter(i => i.type === typeKey && i.rarity === rarityKey);
        // const template = Root.rng.pick(options);

        // TEMP
        const template = Root.rng.pick(ItemFactory.ALL_ITEMS);

        return this._toItem(template);
    }

    create(node) {
        let item;
        if(node.type === NODE.ITEM_WEAK) {
            item = this.pick(
                [10, 5, 2, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 2, 2, 1]
            );
        } else if(node.type === NODE.ITEM_STRONG) {
            item = this.pick(
                [5, 15, 10, 5, 1],
                [2, 2, 2, 2, 2, 2, 2, 1, 2, 1]
            );
        } else if(node.type === NODE.KEY) {
            item = new Key(KEY_TEMPLATES.NEXT_LEVEL_KEY);
        }
        return new ItemEntity(item);
    }
    
}
