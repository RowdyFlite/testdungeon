setup.init_armor = function(){
	const ARMOR = "Armor";
	setup.gamedata.add(ARMOR, {
		id: "leather",
		cost: 5,
		def: 1,
		name: "Leather"
	});
	setup.gamedata.add(ARMOR, {
		id: "chain",
		cost: 10,
		def: 2,
		name: "Chain Mail"
	});
	setup.gamedata.add(ARMOR, {
		id: "plate",
		cost: 25,
		def: 3,
		name: "Plate Mail"
	});
}