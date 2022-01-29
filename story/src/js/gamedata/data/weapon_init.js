const WEAPON = "Weapon";

setup.init_weapons = function(){
	setup.gamedata.add(WEAPON, {
		id: "dagger",
		cost: 3,
		att: 1,
		name: "Dagger"
	});
	setup.gamedata.add(WEAPON, {
		id: "shortsword",
		cost: 10,
		att: 3,
		name: "Short Sword"
	});
	setup.gamedata.add(WEAPON, {
		id: "longsword",
		cost: 25,
		att: 5,
		name: "Long Sword"
	});
}