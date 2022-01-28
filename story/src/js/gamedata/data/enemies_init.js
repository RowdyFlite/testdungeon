setup.init_enemies = function(){
	const ENEMY = "Enemy";
	setup.gamedata.add(ENEMY, {
		id: "rat",
		maxhp: 1,
		mp: 0,
		att: 1,
		def: 0,
		xp: 1,
		gp: 0
	});
	setup.gamedata.add(ENEMY, {
		id: "kobold",
		maxhp: 3,
		mp: 0,
		att: 2,
		def: 0,
		xp: 2,
		gp: 1
	});
	setup.gamedata.add(ENEMY, {
		id: "goblin",
		maxhp: 5,
		mp: 0,
		att: 3,
		def: 1,
		xp: 4,
		gp: 1
	});
    setup.gamedata.add(ENEMY, {
		id: "goblin shaman",
		maxhp: 1,
		mp: 5,
		att: 1,
		def: 0,
		xp: 3,
		gp: 2
	});
}

