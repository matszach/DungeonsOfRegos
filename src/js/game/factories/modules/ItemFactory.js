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

    _calcType(mainHand, offHand, head, chest, legs, feet, neck, finger, consumable, valuable, money) {
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
            ['VALUABLE', valuable],
            ['MONEY', money]
        );
    }

    _moneyByRarity(rarity) {
        switch (rarity) {
            case 'COMMON': return Root.rng.int(1, 20);
            case 'UNCOMMON': return Root.rng.int(20, 50);
            case 'RARE': return Root.rng.int(50, 100);
            case 'EPIC': return Root.rng.int(100, 250);
            case 'LEGENDARY': return Root.rng.int(250, 500);
            default: return 1;
        }
    }

    _toMoneyTemplate(quantity, rarityKey) {
        return {
            value: quantity,
            type: 'MONEY',
            name: 'Money',
            rarity: rarityKey
        };
    }

    _toItem(template) {
        switch (template.type) {
            case 'MONEY': return new Money(template);
            case 'VALUABLE': return new Valuable(template);
            case 'MAIN_HAND': return new Weapon(template);
            case 'CONSUMABLE': return new Consumable(template);
            default: return new Equippable(template);
        }
    }

    pick(rarityInfo, typeInfo) {
        const typeKey = this._calcType(...typeInfo);
        const rarityKey = this._calcRarity(...rarityInfo);
        let template;
        if(typeKey === 'MONEY') {
            const money = this._moneyByRarity(rarityKey);
            template = this._toMoneyTemplate(money, rarityKey);
        } else {
            const options = ItemFactory.ALL_ITEMS.filter(i => i.type === typeKey && i.rarity === rarityKey);
            template = Root.rng.pick(options);
        }

        // TEMP
        template = Root.rng.pick(ItemFactory.ALL_ITEMS);

        return this._toItem(template);
    }

    create(node) {
        let item;
        if(node.type === NODE.ITEM_WEAK) {
            item = this.pick(
                [10, 5, 2, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 2, 2, 2]

            );
        } else if(node.type === NODE.ITEM_STRONG) {
            item = this.pick(
                [5, 15, 10, 5, 1],
                [2, 2, 2, 2, 2, 2, 2, 1, 2, 1]
            );
        } 
        return new ItemEntity(item);
    }
    
}
