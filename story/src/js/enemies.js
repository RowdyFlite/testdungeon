// set up the dict of enemies.

setup.create_enemy_party = function(tag_map){
	let counter = 0;
	let party = [];

	for (const tag in tag_map) {
		let template = setup.gamedata.get(ENEMY, tag);
		for (let i = 0; i < tag_map[tag]; i++){
			let id = tag + counter++;
			let enemy = Object.assign({}, template);
			enemy.name = tag;
			enemy.id = id;
			enemy.hp = enemy.maxhp;
			party.push(enemy);
		}
	}
	return party;
}