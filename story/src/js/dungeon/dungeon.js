function create_floor(id, rooms, start, end, encounter_table){
	rooms[start].start = true;
	rooms[end].end = true;
	return {id: id, rooms: rooms, start: start, end: end, encounter_table: encounter_table};
}

function create_room(id){
	return {
		id: id,
		north: null,
		east: null,
		west: null,
		south: null,
		start: false,
		end: false,
		encounter: null
	};
}

function create_exit(a, b){
	let coorda = a.id.split(',').map(Number);
	let coordb = b.id.split(',').map(Number);

	if (Math.abs(coorda[0] - coordb[0]) == 1){
		if (coorda[0] > coordb[0]){
			a.west = b.id;
			b.east = a.id;
		}
		else{
			a.east = b.id;
			b.west = a.id;
		}
	}
	else if (Math.abs(coorda[1] - coordb[1]) == 1){
		if (coorda[1] > coordb[1]){
			a.south = b.id;
			b.north = a.id;
		}
		else{
			a.north = b.id;
			b.south = a.id;
		}
	}
}

function floor1(){
	let rooms = {};

	rooms["0,0"] = create_room("0,0");
	rooms["0,1"] = create_room("0,1");
	rooms["0,2"] = create_room("0,2");

	create_exit(rooms["0,0"], rooms["0,1"]);
	create_exit(rooms["0,1"], rooms["0,2"]);

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
	let rooms = {};

	rooms["0,0"] = create_room("0,0");
	rooms["0,1"] = create_room("0,1");
	rooms["0,2"] = create_room("0,2");
	rooms["1,1"] = create_room("1,1");
	rooms["-1,1"] = create_room("-1,1");

	create_exit(rooms["0,0"], rooms["0,1"]);
	create_exit(rooms["0,1"], rooms["0,2"]);
	create_exit(rooms["0,1"], rooms["-1,1"]);
	create_exit(rooms["0,1"], rooms["1,1"]);

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
	let rooms = {};

	rooms["0,0"] = create_room("0,0");
	rooms["1,0"] = create_room("1,0");
	rooms["2,0"] = create_room("2,0");
	rooms["3,0"] = create_room("3,0");
	rooms["3,-1"] = create_room("3,-1");
	rooms["3,-2"] = create_room("3,-2");
	rooms["2,-2"] = create_room("2,-2");
	rooms["2,-1"] = create_room("2,-1");

	create_exit(rooms["0,0"], rooms["1,0"]);
	create_exit(rooms["1,0"], rooms["2,0"]);
	create_exit(rooms["2,0"], rooms["3,0"]);
	create_exit(rooms["3,0"], rooms["3,-1"]);
	create_exit(rooms["3,-1"], rooms["3,-2"]);
	create_exit(rooms["3,-2"], rooms["2,-2"]);
	create_exit(rooms["2,-2"], rooms["2,-1"]);

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