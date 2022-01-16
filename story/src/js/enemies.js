// set up the dict of enemies.

function build_enemy(map, tag, hp, mp, att, def, xp){
	map[tag] = {
		tag: tag,
		hp: hp,
		mp: mp,
		att: att,
		def: def,
		xp: xp
	}
}


setup.init_enemies = function(){
	let enemy_map = {};

	build_enemy(enemy_map, "rat", 1, 0, 1, 0, 1);
	build_enemy(enemy_map, "kobold", 3, 0, 2, 0, 2);
	build_enemy(enemy_map, "goblin", 5, 0, 3, 1, 4);
	build_enemy(enemy_map, "goblin shaman", 1, 5, 1, 0, 3);

	setup.enemy_map = enemy_map;
}

setup.create_enemy_party = function(tag_map){
	let counter = 0;
	let party = [];

	for (const tag in tag_map) {
		let template = setup.enemy_map[tag];
		for (let i = 0; i < tag_map[tag]; i++){
			let id = tag + counter++;
			let enemy = Object.assign({}, template);
			enemy.id = id;
			party.push(enemy);
		}
	}
	return party;
}