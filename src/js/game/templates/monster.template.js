const MONSTER_TEMPLATES = {
	ORC: {
		id: 0,
		internal: 'ORC',
		name: 'Orc',
		spriteset: 'monsters',
		frame: 0,
		might: 50.0,
		agility: 40.0,
		health: 30.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 1,
		maxDmg: 3.0,
		baseDefence: 0,
		chanceToAct: 60.0,
		ai: 'WANDERER',
		rarity: 'COMMON',
	},
	ORC_GUARD: {
		id: 1,
		internal: 'ORC_GUARD',
		name: 'Orc guard',
		spriteset: 'monsters',
		frame: 1,
		might: 60.0,
		agility: 30.0,
		health: 40.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 1,
		maxDmg: 3.0,
		baseDefence: 2.0,
		chanceToAct: 60.0,
		ai: 'SENTINEL',
		rarity: 'COMMON',
	},
	SKELETON: {
		id: 2,
		internal: 'SKELETON',
		name: 'Skeleton',
		spriteset: 'monsters',
		frame: 10.0,
		might: 40.0,
		agility: 20.0,
		health: 30.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 1,
		maxDmg: 3.0,
		baseDefence: 5.0,
		chanceToAct: 60.0,
		ai: 'WANDERER',
		rarity: 'COMMON',
	},
	SKELETON_FRENZY: {
		id: 3,
		internal: 'SKELETON_FRENZY',
		name: 'Frenzy skeleton',
		spriteset: 'monsters',
		frame: 11.0,
		might: 50.0,
		agility: 30.0,
		health: 20.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 2.0,
		maxDmg: 4.0,
		baseDefence: 5.0,
		chanceToAct: 80.0,
		ai: 'WANDERER',
		rarity: 'UNCOMMON',
	},
	SKELETON_DEATH: {
		id: 4,
		internal: 'SKELETON_DEATH',
		name: 'Death skeleton',
		spriteset: 'monsters',
		frame: 12.0,
		might: 60.0,
		agility: 30.0,
		health: 30.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 2.0,
		maxDmg: 4.0,
		baseDefence: 5.0,
		chanceToAct: 60.0,
		ai: 'WANDERER',
		rarity: 'UNCOMMON',
	},
	SKELETON_LUCK: {
		id: 5,
		internal: 'SKELETON_LUCK',
		name: 'Luck skeleton',
		spriteset: 'monsters',
		frame: 13.0,
		might: 50.0,
		agility: 30.0,
		health: 20.0,
		senses: 30.0,
		luck: 50.0,
		minDmg: 2.0,
		maxDmg: 4.0,
		baseDefence: 5.0,
		chanceToAct: 60.0,
		ai: 'WANDERER',
		rarity: 'UNCOMMON',
	},
	VAMPIRE: {
		id: 6,
		internal: 'VAMPIRE',
		name: 'Vampire',
		spriteset: 'monsters',
		frame: 20.0,
		might: 80.0,
		agility: 50.0,
		health: 60.0,
		senses: 50.0,
		luck: 30.0,
		minDmg: 3.0,
		maxDmg: 7.0,
		baseDefence: 8.0,
		chanceToAct: 70.0,
		ai: 'WANDERER',
		rarity: 'RARE',
	},
};