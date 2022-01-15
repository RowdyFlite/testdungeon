function create_floor(id, rooms){
	return {id: id, rooms: rooms};
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
	coorda = a.id.split(',').map(Number);
	coordb = b.id.split(',').map(Number);

	if (Math.abs(coorda[0] - coordb[0]) == 1){
		if (coorda[0] > coordb[0]){
			a.south = true;
			b.north = true;
		}
		else{
			a.north = true;
			b.south = true;
		}
	}
	else if (Math.abs(coorda[1] - coordb[1]) == 1){
		if (coorda[1] > coordb[1]){
			a.west = true;
			b.east = true;
		}
		else{
			a.east = true;
			b.west = true;
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

	// invalid - for testing only
	create_exit(rooms["0,0"], rooms["0,2"]);

	rooms["0,0"].start = true;
	rooms["0,2"].end = true;

	return create_floor(1, rooms);
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

	rooms["0,0"].start = true;
	rooms["0,2"].end = true;

	return create_floor(1, rooms);
}

function floor3(){
	let rooms = {};

	rooms["0,0"] = create_room();
	rooms["1,0"] = create_room();
	rooms["2,0"] = create_room();
	rooms["3,0"] = create_room();
	rooms["3,-1"] = create_room();
	rooms["3,-2"] = create_room();
	rooms["2,-2"] = create_room();
	rooms["2,-1"] = create_room();

	rooms["0,0"].start = true;
	rooms["2,-1"].end = true;

	return create_floor(1, rooms);
}

window.init_dungeon = function(){
	let floors = [];

	floors.push(floor1());
	floors.push(floor2());
	floors.push(floor3());
}