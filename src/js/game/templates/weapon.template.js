const WEAPON_TEMPLATES = {
	WOOD_BS: {
		id: 0,
		internal: 'WOOD_BS',
		name: 'Wooden broadsword',
		spriteset: 'weapons',
		frame: 0,
		type: 'MAIN_HAND',
		value: 10.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 5.0,
		maxDamage: 10.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'COMMON',
	},
	WOOD_LS: {
		id: 1,
		internal: 'WOOD_LS',
		name: 'Wooden longsword',
		spriteset: 'weapons',
		frame: 10.0,
		type: 'MAIN_HAND',
		value: 10.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 4.0,
		maxDamage: 9.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'COMMON',
	},
	WOOD_AX: {
		id: 2,
		internal: 'WOOD_AX',
		name: 'Wooden axe',
		spriteset: 'weapons',
		frame: 20.0,
		type: 'MAIN_HAND',
		value: 10.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 4.0,
		maxDamage: 9.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'COMMON',
	},
	WOOD_MC: {
		id: 3,
		internal: 'WOOD_MC',
		name: 'Wooden mace',
		spriteset: 'weapons',
		frame: 30.0,
		type: 'MAIN_HAND',
		value: 10.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 3.0,
		maxDamage: 8.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'COMMON',
	},
	WOOD_HM: {
		id: 4,
		internal: 'WOOD_HM',
		name: 'Wooden hammer',
		spriteset: 'weapons',
		frame: 40.0,
		type: 'MAIN_HAND',
		value: 10.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 3.0,
		maxDamage: 8.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'COMMON',
	},
	IRON_BS: {
		id: 5,
		internal: 'IRON_BS',
		name: 'Iron broadsword',
		spriteset: 'weapons',
		frame: 1,
		type: 'MAIN_HAND',
		value: 40.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'UNCOMMON',
	},
	IRON_LS: {
		id: 6,
		internal: 'IRON_LS',
		name: 'Iron longsword',
		spriteset: 'weapons',
		frame: 11.0,
		type: 'MAIN_HAND',
		value: 40.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'UNCOMMON',
	},
	IRON_AX: {
		id: 7,
		internal: 'IRON_AX',
		name: 'Iron axe',
		spriteset: 'weapons',
		frame: 21.0,
		type: 'MAIN_HAND',
		value: 40.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'UNCOMMON',
	},
	IRON_MC: {
		id: 8,
		internal: 'IRON_MC',
		name: 'Iron mace',
		spriteset: 'weapons',
		frame: 31.0,
		type: 'MAIN_HAND',
		value: 40.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 5.0,
		maxDamage: 10.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'UNCOMMON',
	},
	IRON_HM: {
		id: 9,
		internal: 'IRON_HM',
		name: 'Iron hammer',
		spriteset: 'weapons',
		frame: 41.0,
		type: 'MAIN_HAND',
		value: 40.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 5.0,
		maxDamage: 10.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'UNCOMMON',
	},
	RUST_BS: {
		id: 10,
		internal: 'RUST_BS',
		name: 'Rusty broadsword',
		spriteset: 'weapons',
		frame: 2.0,
		type: 'MAIN_HAND',
		value: 20.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'UNCOMMON',
	},
	RUST_LS: {
		id: 11,
		internal: 'RUST_LS',
		name: 'Rusty longsword',
		spriteset: 'weapons',
		frame: 12.0,
		type: 'MAIN_HAND',
		value: 20.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 5.0,
		maxDamage: 10.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'UNCOMMON',
	},
	RUST_AX: {
		id: 12,
		internal: 'RUST_AX',
		name: 'Rusty axe',
		spriteset: 'weapons',
		frame: 22.0,
		type: 'MAIN_HAND',
		value: 20.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 5.0,
		maxDamage: 10.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'UNCOMMON',
	},
	RUST_MC: {
		id: 13,
		internal: 'RUST_MC',
		name: 'Rusty mace',
		spriteset: 'weapons',
		frame: 32.0,
		type: 'MAIN_HAND',
		value: 20.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 4.0,
		maxDamage: 9.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'UNCOMMON',
	},
	RUST_HM: {
		id: 14,
		internal: 'RUST_HM',
		name: 'Rusty hammer',
		spriteset: 'weapons',
		frame: 42.0,
		type: 'MAIN_HAND',
		value: 20.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 4.0,
		maxDamage: 9.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'UNCOMMON',
	},
	ROYAL_BS: {
		id: 15,
		internal: 'ROYAL_BS',
		name: 'Royal broadsword',
		spriteset: 'weapons',
		frame: 3.0,
		type: 'MAIN_HAND',
		value: 100.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'RARE',
	},
	ROYAL_LS: {
		id: 16,
		internal: 'ROYAL_LS',
		name: 'Royal longsword',
		spriteset: 'weapons',
		frame: 13.0,
		type: 'MAIN_HAND',
		value: 100.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 20.0,
		penetration: 0,
		rarity: 'RARE',
	},
	ROYAL_AX: {
		id: 17,
		internal: 'ROYAL_AX',
		name: 'Royal axe',
		spriteset: 'weapons',
		frame: 23.0,
		type: 'MAIN_HAND',
		value: 100.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 10.0,
		penetration: 2.0,
		rarity: 'RARE',
	},
	ROYAL_MC: {
		id: 18,
		internal: 'ROYAL_MC',
		name: 'Royal mace',
		spriteset: 'weapons',
		frame: 33.0,
		type: 'MAIN_HAND',
		value: 100.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 10.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	ROYAL_HM: {
		id: 19,
		internal: 'ROYAL_HM',
		name: 'Royal hammer',
		spriteset: 'weapons',
		frame: 43.0,
		type: 'MAIN_HAND',
		value: 100.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 5.0,
		penetration: 4.0,
		rarity: 'RARE',
	},
	CURSE_BS: {
		id: 20,
		internal: 'CURSE_BS',
		name: 'Cursed broadsword',
		spriteset: 'weapons',
		frame: 4.0,
		type: 'MAIN_HAND',
		value: 80.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: '-10',
		defence: 0,
		minDamage: 8.0,
		maxDamage: 15.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'RARE',
	},
	CURSE_LS: {
		id: 21,
		internal: 'CURSE_LS',
		name: 'Cursed longsword',
		spriteset: 'weapons',
		frame: 14.0,
		type: 'MAIN_HAND',
		value: 80.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: '-10',
		defence: 0,
		minDamage: 7.0,
		maxDamage: 14.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'RARE',
	},
	CURSE_AX: {
		id: 22,
		internal: 'CURSE_AX',
		name: 'Cursed axe',
		spriteset: 'weapons',
		frame: 24.0,
		type: 'MAIN_HAND',
		value: 80.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: '-10',
		defence: 0,
		minDamage: 7.0,
		maxDamage: 14.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'RARE',
	},
	CURSE_MC: {
		id: 23,
		internal: 'CURSE_MC',
		name: 'Cursed mace',
		spriteset: 'weapons',
		frame: 34.0,
		type: 'MAIN_HAND',
		value: 80.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: '-10',
		defence: 0,
		minDamage: 6.0,
		maxDamage: 13.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	CURSE_HM: {
		id: 24,
		internal: 'CURSE_HM',
		name: 'Cursed hammer',
		spriteset: 'weapons',
		frame: 44.0,
		type: 'MAIN_HAND',
		value: 80.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: '-10',
		defence: 0,
		minDamage: 6.0,
		maxDamage: 13.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'RARE',
	},
	MITH_BS: {
		id: 25,
		internal: 'MITH_BS',
		name: 'Mithril broadsword',
		spriteset: 'weapons',
		frame: 5.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 9.0,
		maxDamage: 14.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'RARE',
	},
	MITH_LS: {
		id: 26,
		internal: 'MITH_LS',
		name: 'Mithril longsword',
		spriteset: 'weapons',
		frame: 15.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'RARE',
	},
	MITH_AX: {
		id: 27,
		internal: 'MITH_AX',
		name: 'Mithril axe',
		spriteset: 'weapons',
		frame: 25.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'RARE',
	},
	MITH_MC: {
		id: 28,
		internal: 'MITH_MC',
		name: 'Mithril mace',
		spriteset: 'weapons',
		frame: 35.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	MITH_HM: {
		id: 29,
		internal: 'MITH_HM',
		name: 'Mithril hammer',
		spriteset: 'weapons',
		frame: 45.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'RARE',
	},
	AGI_BS: {
		id: 30,
		internal: 'AGI_BS',
		name: 'Agile broadsword',
		spriteset: 'weapons',
		frame: 6.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 5.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'RARE',
	},
	AGI_LS: {
		id: 31,
		internal: 'AGI_LS',
		name: 'Agile longsword',
		spriteset: 'weapons',
		frame: 16.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 5.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'RARE',
	},
	AGI_AX: {
		id: 32,
		internal: 'AGI_AX',
		name: 'Agile axe',
		spriteset: 'weapons',
		frame: 26.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 5.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'RARE',
	},
	AGI_MC: {
		id: 33,
		internal: 'AGI_MC',
		name: 'Agile mace',
		spriteset: 'weapons',
		frame: 36.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 5.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	AGI_HM: {
		id: 34,
		internal: 'AGI_HM',
		name: 'Agile hammer',
		spriteset: 'weapons',
		frame: 46.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 5.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'RARE',
	},
	SPECT_BS: {
		id: 35,
		internal: 'SPECT_BS',
		name: 'Spectral broadsword',
		spriteset: 'weapons',
		frame: 7.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 10.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	SPECT_LS: {
		id: 36,
		internal: 'SPECT_LS',
		name: 'Spectral longsword',
		spriteset: 'weapons',
		frame: 17.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 15.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	SPECT_AX: {
		id: 37,
		internal: 'SPECT_AX',
		name: 'Spectral axe',
		spriteset: 'weapons',
		frame: 27.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 5.0,
		penetration: 5.0,
		rarity: 'RARE',
	},
	SPECT_MC: {
		id: 38,
		internal: 'SPECT_MC',
		name: 'Spectral mace',
		spriteset: 'weapons',
		frame: 37.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 5.0,
		penetration: 6.0,
		rarity: 'RARE',
	},
	SPECT_HM: {
		id: 39,
		internal: 'SPECT_HM',
		name: 'Spectral hammer',
		spriteset: 'weapons',
		frame: 47.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 2.0,
		penetration: 7.0,
		rarity: 'RARE',
	},
	MIGHT_BS: {
		id: 40,
		internal: 'MIGHT_BS',
		name: 'Mighty broadsword',
		spriteset: 'weapons',
		frame: 8.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 5.0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 10.0,
		penetration: 0,
		rarity: 'RARE',
	},
	MIGHT_LS: {
		id: 41,
		internal: 'MIGHT_LS',
		name: 'Mighty longsword',
		spriteset: 'weapons',
		frame: 18.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 5.0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 15.0,
		penetration: 0,
		rarity: 'RARE',
	},
	MIGHT_AX: {
		id: 42,
		internal: 'MIGHT_AX',
		name: 'Mighty axe',
		spriteset: 'weapons',
		frame: 28.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 5.0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 5.0,
		penetration: 2.0,
		rarity: 'RARE',
	},
	MIGHT_MC: {
		id: 43,
		internal: 'MIGHT_MC',
		name: 'Mighty mace',
		spriteset: 'weapons',
		frame: 38.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 5.0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 5.0,
		penetration: 3.0,
		rarity: 'RARE',
	},
	MIGHT_HM: {
		id: 44,
		internal: 'MIGHT_HM',
		name: 'Mighty hammer',
		spriteset: 'weapons',
		frame: 48.0,
		type: 'MAIN_HAND',
		value: 120.0,
		might: 5.0,
		agility: 0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 6.0,
		maxDamage: 11.0,
		critChance: 2.0,
		penetration: 4.0,
		rarity: 'RARE',
	},
	ENCH_BS: {
		id: 45,
		internal: 'ENCH_BS',
		name: 'Enchanted broadsword',
		spriteset: 'weapons',
		frame: 9.0,
		type: 'MAIN_HAND',
		value: 250.0,
		might: 10.0,
		agility: 10.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 9.0,
		maxDamage: 14.0,
		critChance: 12.0,
		penetration: 1,
		rarity: 'EPIC',
	},
	ENCH_LS: {
		id: 46,
		internal: 'ENCH_LS',
		name: 'Enchanted longsword',
		spriteset: 'weapons',
		frame: 19.0,
		type: 'MAIN_HAND',
		value: 250.0,
		might: 10.0,
		agility: 10.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 17.0,
		penetration: 1,
		rarity: 'EPIC',
	},
	ENCH_AX: {
		id: 47,
		internal: 'ENCH_AX',
		name: 'Enchanted axe',
		spriteset: 'weapons',
		frame: 29.0,
		type: 'MAIN_HAND',
		value: 250.0,
		might: 10.0,
		agility: 10.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 8.0,
		maxDamage: 13.0,
		critChance: 7.0,
		penetration: 3.0,
		rarity: 'EPIC',
	},
	ENCH_MC: {
		id: 48,
		internal: 'ENCH_MC',
		name: 'Enchanted mace',
		spriteset: 'weapons',
		frame: 39.0,
		type: 'MAIN_HAND',
		value: 250.0,
		might: 10.0,
		agility: 10.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 7.0,
		penetration: 4.0,
		rarity: 'EPIC',
	},
	ENCH_HM: {
		id: 49,
		internal: 'ENCH_HM',
		name: 'Enchanted hammer',
		spriteset: 'weapons',
		frame: 49.0,
		type: 'MAIN_HAND',
		value: 250.0,
		might: 10.0,
		agility: 10.0,
		health: 0,
		senses: 0,
		luck: 0,
		defence: 0,
		minDamage: 7.0,
		maxDamage: 12.0,
		critChance: 4.0,
		penetration: 5.0,
		rarity: 'EPIC',
	},
};