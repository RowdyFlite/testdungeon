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
		window.alert(`Room ID: ${room.id}. Rolled ${roll}. Encounter rate is ${floor.encounter_chance}`);


		if (room.encounters_allowed && roll < floor.encounter_chance){
			roll = Math.floor(Math.random() * total);
			for (const encounter of encounter_table.encounters){
				if (roll <= encounter.chance){
					encounters[room_id] = encounter.tags;
					continue;
				}
			}
		}
		window.alert(`Roll to choose encounter: ${roll}. Encounter chosen: ${encounters[room_id]}`);
	}
	State.variables.encounters = encounters;
}