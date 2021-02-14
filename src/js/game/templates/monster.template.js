const MONSTER_TEMPLATES = {
	ORC: {
		id: 0,
		name: 'Orc',
		spriteset: 'monsters',
		frame: 0,
		might: 50.0,
		agility: 30.0,
		health: 20.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 1,
		maxDmg: 3.0,
		baseDefence: 0,
		ai: 'WANDERER',
		rarity: 'COMMON',
	},
	ORC_GUARD: {
		id: 1,
		name: 'Orc guard',
		spriteset: 'monsters',
		frame: 1,
		might: 60.0,
		agility: 30.0,
		health: 20.0,
		senses: 30.0,
		luck: 10.0,
		minDmg: 1,
		maxDmg: 3.0,
		baseDefence: 2.0,
		ai: 'WANDERER',
		rarity: 'COMMON',
	},
};