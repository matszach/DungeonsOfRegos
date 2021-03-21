class CharacterSheetGui extends BaseSceneComponent {

    static make(scene, player) {
        const ih = new CharacterSheetGui(scene, player);
        this.align(scene, ih.container, {leftPerc: 0.5, topPerc: 0.5});
        return ih;
    }

    constructor(scene, player) {
        super();
        this.scene = scene;
        this.player = player;
        this.container = this.scene.add.container(0, 0).setAlpha(0.9);
        this.itemBoxes = [];
        this.itemTooltip = null;
        this.attrBlock = null;
        this.isDeletionMode = false;

        // backgroud shade
        const shade = this.scene.add.rectangle(0, 0, 50000, 30000, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.7); // TODO set sife of this to the size of window somehow
        this.container.add(shade);

        // inventory background proper 
        const background = this.scene.add.rectangle(0, 0, 900, 600, 0x000000).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x999999).setAlpha(0.9);
        this.container.add(background);  

        // player silhuette and items
        const playerSilhuette = this.scene.add.sprite(-300, 0, 'player_silhouette').setOrigin(0.5, 0.5).setScale(2, 2).setAlpha(0.3);
        this.container.add(playerSilhuette); 
        this.displayItems();
        this.displayAttributes();

        // trashcan button
        const trash = this.trashButton(-160, 250);
        this.container.add(trash);

        // exit button
        const close = BaseSceneComponent.closeButton(425, -275, scene, () => scene.toggleCharacterSheet())
        this.container.add(close);
    }

    makeItemBox(x, y, item, type, itemX, itemY) {
        const ib = this.scene.add.container(x, y);
        const bck = this.scene.add.rectangle(0, 0, 60, 60, 0x333333).setAlpha(0.4).setStrokeStyle(1, 0x999999);
        ib.add(bck);
        if(!!item) {
            const ig = this.scene.add.sprite(0, 0, item._template.spriteset).setFrame(item._template.frame).setScale(0.9, 0.9);
            ib.add(ig);
        }
        const gui = this;
        bck.setInteractive().on('pointerover', event => {
            this.makeItemTooltip(x, y, item);
            bck.setAlpha(0.6);            
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            this.dropItemTooltip();   
            bck.setAlpha(0.4);         
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            ib.setAlpha(0.5);
        }).on('pointerup', event => {
            ib.setAlpha(0.6);
            gui.onItemClicked(type, item, itemX, itemY);
            gui.update();
        });
        this.itemBoxes.push(ib);
        this.container.add(ib);
    }

    onItemClicked(type, item, itemX, itemY) {
        if(type === 'equipped' && !!item) {
            Root.player.inv.unequip(item.type);
        } else {
            if(this.isDeletionMode) {
                Root.player.inv.drop(itemX, itemY);
            } else {
                Root.player.inv.use(itemX, itemY);
            }
        }
    }

    makeItemTooltip(x, y, item) {
        if(!!item) {
            this.itemTooltip = ItemTooltip.make(this.scene, x, y, item);
            this.container.add(this.itemTooltip);
        }
    }

    dropItemTooltip() {
        if(!!this.itemTooltip) {
            this.itemTooltip.destroy();
        }
    }

    displayItems() {
        const eq = Root.player.inv.equipped;
        // equipped
        this.makeItemBox(-400, -10, eq.mainHand, 'equipped');
        this.makeItemBox(-400, -85, eq.finger, 'equipped');
        this.makeItemBox(-200, -10, eq.offHand, 'equipped');
        this.makeItemBox(-300, -30, eq.chest, 'equipped');
        this.makeItemBox(-300, -105, eq.neck, 'equipped');
        this.makeItemBox(-300, -180, eq.head, 'equipped');
        this.makeItemBox(-300, 70, eq.legs, 'equipped');
        this.makeItemBox(-300, 180, eq.feet, 'equipped');
        // backpack
        for(let x = 0; x < 8; x++) {
            for(let y = 0; y < 5; y++) {
                this.makeItemBox(-100 + x * 70, -40 + y * 70, Root.player.inv.get(x, y), 'backpack', x, y);
            }
        }
    }

    displayAttributes() {
        this.attrBlock = this.scene.add.container(0, 0);
        this.container.add(this.attrBlock);

        // main attributes
        const mightLabel = this.scene.add.text(-130, -270, 'Might').setColor('#ff0000').setScale(1.4);
        const mightValue = this.scene.add.text(20, -270, this.player.attr.might()).setColor('#ff0000').setScale(1.4);
        this.attrBlock.add(mightLabel).add(mightValue);
        const agilityLabel = this.scene.add.text(-130, -235, 'Agility').setColor('#6600ff').setScale(1.4);
        const agilityValue = this.scene.add.text(20, -235, this.player.attr.agility()).setColor('#6600ff').setScale(1.4);
        this.attrBlock.add(agilityLabel).add(agilityValue);
        const healthLabel = this.scene.add.text(-130, -200, 'Health').setColor('#00ff00').setScale(1.4);
        const healthValue = this.scene.add.text(20, -200, this.player.attr.healthToString()).setColor('#00ff00').setScale(1.4);
        this.attrBlock.add(healthLabel).add(healthValue);
        const sensesLabel = this.scene.add.text(-130, -165, 'Senses').setColor('#0066ff').setScale(1.4);
        const sensesValue = this.scene.add.text(20, -165, this.player.attr.senses()).setColor('#0066ff').setScale(1.4);
        this.attrBlock.add(sensesLabel).add(sensesValue);
        const luckLabel = this.scene.add.text(-130, -130, 'Luck').setColor('#ffff00').setScale(1.4);
        const luckValue = this.scene.add.text(20, -130, this.player.attr.luck()).setColor('#ffff00').setScale(1.4);
        this.attrBlock.add(luckLabel).add(luckValue);

        // attack and defence attributes
        const defenceLabel = this.scene.add.text(140, -270, 'Defence').setColor('#aaaaaa').setScale(1.4);
        const defenceValue = this.scene.add.text(290, -270, this.player.attr.defence()).setColor('#aaaaaa').setScale(1.4);
        this.attrBlock.add(defenceLabel).add(defenceValue);
        const damageRangeLabel = this.scene.add.text(140, -235, 'Damage').setColor('#aaaaaa').setScale(1.4);
        const damageRangeValue = this.scene.add.text(290, -235, this.player.attr.damageRangeToString()).setColor('#aaaaaa').setScale(1.4);
        this.attrBlock.add(damageRangeLabel).add(damageRangeValue);
        const critLabel = this.scene.add.text(140, -200, 'Crit.').setColor('#aaaaaa').setScale(1.4);
        const critValue = this.scene.add.text(290, -200, this.player.attr.critToString()).setColor('#aaaaaa').setScale(1.4);
        this.attrBlock.add(critLabel).add(critValue);
        const penLabel = this.scene.add.text(140, -165, 'Armor pen.').setColor('#aaaaaa').setScale(1.4);
        const penValue = this.scene.add.text(290, -165, this.player.attr.penetration().toFixed(1)).setColor('#aaaaaa').setScale(1.4);
        this.attrBlock.add(penLabel).add(penValue);
        const dodgeLabel = this.scene.add.text(140, -130, 'Dodge').setColor('#aaaaaa').setScale(1.4);
        const dodgeValue = this.scene.add.text(290, -130, this.player.attr.dodgeToString()).setColor('#aaaaaa').setScale(1.4);
        this.attrBlock.add(dodgeLabel).add(dodgeValue);
    }

    update() {
        this.itemBoxes.forEach(ib => ib.destroy());
        if(!!this.attrBlock) {
            this.attrBlock.destroy();
        }
        this.itemBoxes = [];
        this.dropItemTooltip();
        this.displayItems();
        this.displayAttributes();
        this.scene.updateVisibility();
    }
   
    destroy() {
        this.container.destroy();
        return this;
    }

    trashButton(x, y) {
        const tb = this.scene.add.container(x, y);
        const bck = this.scene.add.rectangle(0, 0, 60, 60).setAlpha(0.4).setScale(0.7, 0.7);
        tb.add(bck);
        const img = this.scene.add.sprite(0, 0, 'trashcan_button').setScale(0.5, 0.5).setAlpha(0.4);
        tb.add(img);
        const gui = this;
        bck.setInteractive().on('pointerover', event => {
            img.setAlpha(0.5);
            MenuButton.cursor('pointer');
        }).on('pointerout', event => {
            img.setAlpha(0.4);
            MenuButton.cursor('default');
        }).on('pointerdown', event => {
            img.setAlpha(0.6);
        }).on('pointerup', event => {
            img.setAlpha(0.5);
            gui.isDeletionMode = !gui.isDeletionMode;
            bck.setStrokeStyle(gui.isDeletionMode ? 3 : 0, gui.isDeletionMode ? 0xff0000 : 0x999999);
        });
        return tb;
    }

}