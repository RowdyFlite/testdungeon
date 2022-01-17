function create_floor(id, rooms, start, end){
	rooms[start].start = true;
	rooms[end].end = true;
	return {id: id, rooms: rooms, start: start, end: end};
}

function create_room(id){
	return {
		id: id,
		north: null,
		east: null,
		west: null,
		south: null,
		start: false,
		end: false
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
	else{
		window.alert("Invalid exit between " + a.id + " and " + b.id);
	}
}

function floor1(){
	let rooms = {};

	rooms["0,0"] = create_room("0,0");
	rooms["0,1"] = create_room("0,1");
	rooms["0,2"] = create_room("0,2");

	create_exit(rooms["0,0"], rooms["0,1"]);
	create_exit(rooms["0,1"], rooms["0,2"]);

	return create_floor(1, rooms, "0,0", "0,2");
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

	return create_floor(2, rooms, "0,0", "0,2");
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
	create_exit(rooms["3,-1"], rooms["3,-2"]);
	create_exit(rooms["3,-2"], rooms["2,-2"]);
	create_exit(rooms["2,-2"], rooms["2,-1"]);

	return create_floor(3, rooms, "0,0", "2,-1");
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