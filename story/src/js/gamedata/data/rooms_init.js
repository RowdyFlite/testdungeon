const ROOM = "Room";

const NORTH = "North";
const EAST = "East";
const SOUTH = "South";
const WEST = "West";
const UP = "Up";
const DOWN = "Down";
const OUT = "Out";

setup.init_rooms = function(){
	setup.gamedata.add(ROOM, create_room(1, 0, 0));
    setup.gamedata.add(ROOM, create_room(1, 0, 1));
    setup.gamedata.add(ROOM, create_room(1, 0, 2));

    create_exit(setup.gamedata.get(ROOM, "1-0,0"), setup.gamedata.get(ROOM, "1-0,1"));
    create_exit(setup.gamedata.get(ROOM, "1-0,1"), setup.gamedata.get(ROOM, "1-0,2"));

    setup.gamedata.get(ROOM, "1-0,0").encounters_allowed = false;
    setup.gamedata.get(ROOM, "1-0,2").encounters_allowed = false;

    setup.gamedata.get(ROOM, "1-0,0").exits[DOWN] = OUT;
    setup.gamedata.get(ROOM, "1-0,2").exits[UP] = "2-0,0";

    setup.gamedata.add(ROOM, create_room(2, 0, 0));
    setup.gamedata.add(ROOM, create_room(2, 0, 1));
    setup.gamedata.add(ROOM, create_room(2, 1, 1));
    setup.gamedata.add(ROOM, create_room(2, -1, 1));
    setup.gamedata.add(ROOM, create_room(2, 0, 2));

    create_exit(setup.gamedata.get(ROOM, "2-0,0"), setup.gamedata.get(ROOM, "2-0,1"));
    create_exit(setup.gamedata.get(ROOM, "2-0,1"), setup.gamedata.get(ROOM, "2-0,2"));
    create_exit(setup.gamedata.get(ROOM, "2-0,1"), setup.gamedata.get(ROOM, "2-1,1"));
    create_exit(setup.gamedata.get(ROOM, "2-0,1"), setup.gamedata.get(ROOM, "2--1,1"));

    setup.gamedata.get(ROOM, "2-0,0").exits[DOWN] = "1-0,2";
    setup.gamedata.get(ROOM, "2-0,2").exits[UP] = "3-0,0";

    setup.gamedata.get(ROOM, "2-0,0").encounters_allowed = false;
    setup.gamedata.get(ROOM, "2-0,2").encounters_allowed = false;

    setup.gamedata.add(ROOM, create_room(3, 0, 0));
    setup.gamedata.add(ROOM, create_room(3, 1, 0));
    setup.gamedata.add(ROOM, create_room(3, 2, 0));
    setup.gamedata.add(ROOM, create_room(3, 3, 0));
    setup.gamedata.add(ROOM, create_room(3, 3, -1));
    setup.gamedata.add(ROOM, create_room(3, 3, -2));
    setup.gamedata.add(ROOM, create_room(3, 2, -2));
    setup.gamedata.add(ROOM, create_room(3, 2, -1));

    create_exit(setup.gamedata.get(ROOM, "3-0,0"), setup.gamedata.get(ROOM, "3-1,0"));
    create_exit(setup.gamedata.get(ROOM, "3-1,0"), setup.gamedata.get(ROOM, "3-2,0"));
    create_exit(setup.gamedata.get(ROOM, "3-2,0"), setup.gamedata.get(ROOM, "3-3,0"));
    create_exit(setup.gamedata.get(ROOM, "3-3,0"), setup.gamedata.get(ROOM, "3-3,-1"));
    create_exit(setup.gamedata.get(ROOM, "3-3,-1"), setup.gamedata.get(ROOM, "3-3,-2"));
    create_exit(setup.gamedata.get(ROOM, "3-3,-2"), setup.gamedata.get(ROOM, "3-2,-2"));
    create_exit(setup.gamedata.get(ROOM, "3-2,-2"), setup.gamedata.get(ROOM, "3-2,-1"));
    
    setup.gamedata.get(ROOM, "3-0,0").exits[DOWN] = "2-0,2";

    setup.gamedata.get(ROOM, "3-0,0").encounters_allowed = false;
}

function create_room(floor, x, y){
    return {
        id: `${floor}-${x},${y}`,
        floor: floor,
        x: x,
        y: y,
        encounters_allowed: true,
        exits: {
            NORTH: null,
            SOUTH: null,
            EAST: null,
            WEST: null,
            UP: null,
            DOWN: null
        }
    };
}

function create_exit(a, b){
	let coorda = [a.x, a.y];
	let coordb = [b.x, b.y];

	if (Math.abs(coorda[0] - coordb[0]) == 1){
		if (coorda[0] > coordb[0]){
			a.exits[WEST] = b.id;
			b.exits[EAST] = a.id;
		}
		else{
			a.exits[EAST] = b.id;
			b.exits[WEST] = a.id;
		}
	}
	else if (Math.abs(coorda[1] - coordb[1]) == 1){
		if (coorda[1] > coordb[1]){
			a.exits[SOUTH] = b.id;
			b.exits[NORTH] = a.id;
		}
		else{
			a.exits[NORTH] = b.id;
			b.exits[SOUTH] = a.id;
		}
	}
}