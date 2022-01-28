setup.roll_encounters = function(floor_id){
	let floor = setup.gamedata.get(FLOOR, floor_id);
	let rooms = floor.rooms;
	let encounter_table = setup.gamedata.get(ENCOUNTER, floor.encounter_table);
	let encounters = {};
	let total = 0;

	for (const encounter of encounter_table.encounters){
		total += encounter.chance;
	}
	window.alert("Rolling for " + rooms.length + " rooms.");
	for (const room_id in rooms){
		let room = setup.gamedata.get(ROOM, room_id);
		if (room.encounters_allowed && Math.random() < floor.encounter_chance){
			let roll = Math.floor(Math.random() * total);
			for (const encounter of encounter_table.encounters){
				if (roll <= encounter.chance){
					window.alert("Adding encounter to room " + room_id);
					encounters[room_id] = encounter.tags;
				}
			}
		}
	}
	State.variables.encounters = encounters;
}