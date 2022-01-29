setup.roll_encounters = function(floor_id){
	let floor = setup.gamedata.get(FLOOR, floor_id);
	let rooms = floor.rooms;
	let encounter_table = setup.gamedata.get(ENCOUNTER, floor.encounter_table);
	let encounters = {};
	let total = 0;

	for (const encounter of encounter_table.encounters){
		total += encounter.chance;
	}

	for (const room_id of rooms){
		let room = setup.gamedata.get(ROOM, room_id);
		
		if (!room.encounters_allowed){
			continue;
		}
		
		let roll = Math.random();

		if (room.encounters_allowed && roll < floor.encounter_chance){
			encounters[room_id] = choose_encounter(encounter_table, total);
			window.alert("Room id: " + room_id);
		}
	}
	State.variables.encounters = encounters;
}

function choose_encounter(encounter_table, total){
	let roll = Math.floor(Math.random() * total);
	for (const encounter of encounter_table.encounters){
		if (roll <= encounter.chance){
			return encounter.tags;
		}
		roll -= encounter.chance;
	}	
}