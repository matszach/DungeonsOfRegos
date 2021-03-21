class ItemTooltip extends BaseSceneComponent {

    static make(scene, x, y, item) {

        // rarity color
        let frameColor;
        let itemNameColor;
        switch(item.rarity) {
            case RARITY.COMMON: frameColor = 0xcccccc; itemNameColor = '#cccccc'; break;
            case RARITY.UNCOMMON: frameColor = 0x22cc00; itemNameColor = '#22cc00'; break;
            case RARITY.RARE: frameColor = 0x0088cc; itemNameColor = '#0088cc'; break;
            case RARITY.EPIC: frameColor = 0x8800cc; itemNameColor = '#8800cc'; break;
            case RARITY.LEGENDARY: frameColor = 0xcc8800; itemNameColor = '#cc8800'; break;
            default: frameColor = 0x999999; itemNameColor = '#999999'; break;
        }

        // info rows
        const infoRows = [];
        if(item.type === ITEM_TYPE.MAIN_HAND) {
            infoRows.push({value: `Damage: ${item.minDamage}-${item.maxDamage}`});
            infoRows.push({value: `Crit: ${item.critChance}%`});
            infoRows.push({value: `Penetration: ${item.penetration}`});
        }
        if(!!item.modifiers) {
            ['might', 'agility', 'senses', 'health', 'luck', 'defence'].forEach(modKey => {
                const modValue = item.modifiers[modKey] || 0;
                if(modValue !== 0) {
                    infoRows.push({
                        value: `${capitalize(modKey)}: ${modValue}`,
                        color: modValue > 0 ? '#00cc00' : '#cc0000'
                    });
                }
            }, this);
        }
        if(item.type === ITEM_TYPE.CONSUMABLE) {
            const effectString = item._template.effect.split(':');
            console.log(item, effectString);
            switch(effectString[0]) {
                case 'HEALING':
                    infoRows.push({value: `Restores ${effectString[1]}-${effectString[2]} health`});
                    break;
                default: 
                    break;
            }
        }

        // tooltip size
        let width = item.name.length * 12 + 10;
        if(width < 150) {
            width = 150;
        }
        let height = 30 + 20 * infoRows.length;

        // tooltip body 
        const tooltipContainer = scene.add.container(x + 35, y - 30);
        const tooltipBody = scene.add.rectangle(0, 0, width, height, 0x333333).setAlpha(0.95).setOrigin(0, 0).setStrokeStyle(2, frameColor);
        tooltipContainer.add(tooltipBody);
        const itemNameText = scene.add.text(5, 5, item.name).setColor(itemNameColor).setFontSize(20);
        tooltipContainer.add(itemNameText);
        infoRows.forEach((row, i) => {
            const infoRowText = scene.add.text(5, i * 20 + 30, row.value).setColor(row.color || '#cccccc').setFontSize(16);
            tooltipContainer.add(infoRowText);
        });
        return tooltipContainer;
    }

}