function create_floor(id, rooms, start, end, encounter_table){
	rooms[start].start = true;
	rooms[end].end = true;
	return {id: id, rooms: rooms, start: start, end: end, encounter_table: encounter_table};
}

function floor1(){
	rooms["0,1"].event = {
		id: "TestEventOnce",
		type: "once", //once, always
		passage:"TestEventOnce",
		closing_text: "You cleared it!"	
	};

	let encounter_table = [];
	encounter_table.push({
		chance: 5,
		tags: {
			"rat": 1
		}
	});
	encounter_table.push({
		chance: 2,
		tags: {
			"rat": 2
		}
	});
	encounter_table.push({
		chance: 1,
		tags: {
			"rat": 3
		}
	});

	return create_floor(1, rooms, "0,0", "0,2", encounter_table);
}

function floor2(){
	let encounter_table = [];
	encounter_table.push({
		chance: 5,
		tags: {
			"rat": 2
		}
	});
	encounter_table.push({
		chance: 2,
		tags: {
			"kobold": 1
		}
	});
	encounter_table.push({
		chance: 1,
		tags: {
			"rat": 1,
			"kobold": 1
		}
	});

	return create_floor(2, rooms, "0,0", "0,2", encounter_table);
}

function floor3(){
	rooms["2,-1"].event = {
		id: "TestEventAlways",
		type: "always", //once, always
		passage:"TestEventAlways",
		closing_text: "You cleared it!"	
	};

	let encounter_table = [];
	encounter_table.push({
		chance: 5,
		tags: {
			"goblin": 1
		}
	});
	encounter_table.push({
		chance: 2,
		tags: {
			"goblin": 2
		}
	});
	encounter_table.push({
		chance: 1,
		tags: {
			"goblin": 2,
			"goblin shaman": 1
		}
	});

	return create_floor(3, rooms, "0,0", "2,-1", encounter_table);
}

window.init_encounters = function(floor){
	let encounter_chance = .5;

	let total = 0;
	for (const encounter of floor.encounter_table){
		total += encounter.chance;
	}

	for (const room_id in floor.rooms){

		let room = floor.rooms[room_id];
		if (!room.start && !room.end && Math.random() < encounter_chance){
			let roll = Math.floor(Math.random() * total);
			for (const encounter of floor.encounter_table){
				if (roll <= encounter.chance){
					room.encounter = encounter.tags;
				}
			}
		}
	}
}

window.init_dungeon = function(){
	let floors = [];

	floors.push(floor1());
	floors.push(floor2());
	floors.push(floor3());

	return {
		floors: floors,
		current_floor: 0,
		current_room: "0,0",
		max_floor: floors.length
	}
}