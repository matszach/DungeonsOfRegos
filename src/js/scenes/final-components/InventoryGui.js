class InventoryGui extends BaseSceneComponent {

    static make(scene, player) {
        const ih = new InventoryGui(scene, player);
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

        // backgroud shade
        const shade = this.scene.add.rectangle(0, 0, 50000, 30000, 0x000000).setOrigin(0.5, 0.5).setAlpha(0.7); // TODO set sife of this to the size of window somehow
        this.container.add(shade);

        // inventory background proper 
        const background = this.scene.add.rectangle(0, 0, 900, 500, 0x000000).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x999999).setAlpha(0.9);
        this.container.add(background);  

        // player silhuette and items
        const playerSilhuette = this.scene.add.sprite(-300, 0, 'player_silhouette').setOrigin(0.5, 0.5).setScale(2, 2).setAlpha(0.3);
        this.container.add(playerSilhuette); 
        this.displayItems();
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
            if(type === 'equipped') {
                Root.player.inv.unequip(item.type);
            } else {
                Root.player.inv.use(itemX, itemY);
            }
            console.log(Root.player);
            gui.update();
        });
        this.itemBoxes.push(ib);
        this.container.add(ib);
    }

    makeItemTooltip(x, y, item) {
        if(!!item) {
            this.itemTooltip = this.scene.add.rectangle(x, y + 30, 200, 80, 0x333333).setAlpha(0.8).setStrokeStyle(1, 0x999999).setOrigin(0.5, 0);
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
                this.makeItemBox(-100 + x * 70, -90 + y * 70, Root.player.inv.get(x, y), 'backpack', x, y);
            }
        }
    }

    update() {
        this.itemBoxes.forEach(ib => ib.destroy());
        this.itemBoxes = [];
        this.dropItemTooltip();
        this.displayItems();
    }
   
    destroy() {
        this.container.destroy();
        return this;
    }

}