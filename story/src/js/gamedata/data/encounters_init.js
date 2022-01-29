const ENCOUNTER = "Encounter";

setup.init_encounters = function(){
	create_rats_encounter_table();
	create_ratsgobbo_encounter_table();
	create_goblins_encounter_table();
}

function create_rats_encounter_table(){
	let encounter_table = create_encounter_table("rats");
	encounter_table.encounters.push({
		chance: 4,
		tags: {
			"rat": 1
		}
	});
	encounter_table.encounters.push({
		chance: 2,
		tags: {
			"rat": 2
		}
	});
	encounter_table.encounters.push({
		chance: 1,
		tags: {
			"rat": 3
		}
	});
	setup.gamedata.add(ENCOUNTER, encounter_table);
}

function create_ratsgobbo_encounter_table(){
	let encounter_table = create_encounter_table("ratsgobbo");
	encounter_table.encounters.push({
		chance: 5,
		tags: {
			"rat": 2
		}
	});
	encounter_table.encounters.push({
		chance: 2,
		tags: {
			"kobold": 1
		}
	});
	encounter_table.encounters.push({
		chance: 1,
		tags: {
			"rat": 1,
			"kobold": 1
		}
	});
	setup.gamedata.add(ENCOUNTER, encounter_table);
}

function create_goblins_encounter_table(){
	let encounter_table = create_encounter_table("goblins");
	encounter_table.encounters.push({
		chance: 5,
		tags: {
			"goblin": 1
		}
	});
	encounter_table.encounters.push({
		chance: 2,
		tags: {
			"goblin": 2
		}
	});
	encounter_table.encounters.push({
		chance: 1,
		tags: {
			"goblin": 2,
			"goblin shaman": 1
		}
	});
	setup.gamedata.add(ENCOUNTER, encounter_table);
}

function create_encounter_table(id){
	return {
		id: id,
		encounters: []
	}
}