const ROOM_TEMPLATES = [
	{
		walls: [
		],
		nodes: [
		]
	},
	{
		walls: [
			{x: 1, y: 1},
			{x: 5, y: 1},
			{x: 1, y: 5},
			{x: 5, y: 5},
		],
		nodes: [
			{x: 3, y: 1, key: 'MONSTER_WEAK'},
			{x: 3, y: 3, key: 'ITEM_STRONG'},
			{x: 3, y: 5, key: 'MONSTER_WEAK'},
		]
	},
	{
		walls: [
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 3, y: 1},
			{x: 4, y: 1},
			{x: 5, y: 1},
			{x: 1, y: 5},
			{x: 2, y: 5},
			{x: 3, y: 5},
			{x: 4, y: 5},
			{x: 5, y: 5},
		],
		nodes: [
			{x: 3, y: 3, key: 'MONSTER_STRONG'},
		]
	},
	{
		walls: [
			{x: 2, y: 2},
			{x: 3, y: 2},
			{x: 4, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 3},
			{x: 4, y: 3},
			{x: 2, y: 4},
			{x: 3, y: 4},
			{x: 4, y: 4},
		],
		nodes: [
			{x: 1, y: 5, key: 'CONTAINER_WEAK'},
			{x: 2, y: 5, key: 'CONTAINER_STRONG'},
			{x: 3, y: 5, key: 'MONSTER_STRONG'},
			{x: 1, y: 6, key: 'MONSTER_WEAK'},
		]
	},
	{
		walls: [
			{x: 3, y: 1},
			{x: 4, y: 1},
			{x: 5, y: 1},
			{x: 5, y: 2},
			{x: 5, y: 3},
		],
		nodes: [
			{x: 3, y: 2, key: 'MONSTER_WEAK'},
			{x: 4, y: 2, key: 'ITEM_STRONG'},
			{x: 4, y: 3, key: 'MONSTER_WEAK'},
		]
	},
	{
		walls: [
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 1, y: 2},
			{x: 2, y: 2},
			{x: 4, y: 4},
			{x: 5, y: 4},
			{x: 4, y: 5},
			{x: 5, y: 5},
		],
		nodes: [
			{x: 3, y: 2, key: 'MONSTER_WEAK'},
			{x: 3, y: 4, key: 'MONSTER_WEAK'},
		]
	},
	{
		walls: [
			{x: 1, y: 1},
			{x: 2, y: 1},
			{x: 1, y: 2},
			{x: 2, y: 2},
		],
		nodes: [
			{x: 4, y: 4, key: 'ITEM_WEAK'},
			{x: 5, y: 4, key: 'CONTAINER_WEAK'},
			{x: 4, y: 5, key: 'MONSTER_STRONG'},
			{x: 5, y: 5, key: 'CONTAINER_STRONG'},
		]
	},
	{
		walls: [
		],
		nodes: [
			{x: 2, y: 2, key: 'CONTAINER_WEAK'},
			{x: 4, y: 2, key: 'CONTAINER_WEAK'},
			{x: 2, y: 4, key: 'CONTAINER_WEAK'},
			{x: 4, y: 4, key: 'CONTAINER_WEAK'},
		]
	},
	{
		walls: [
		],
		nodes: [
			{x: 3, y: 2, key: 'MONSTER_STRONG'},
		]
	},
	{
		walls: [
			{x: 2, y: 4},
			{x: 3, y: 4},
			{x: 4, y: 4},
		],
		nodes: [
			{x: 2, y: 1, key: 'ITEM_WEAK'},
		]
	},
];