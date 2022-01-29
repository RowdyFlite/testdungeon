const FLOOR = "Floor";

setup.init_floors = function(){
  setup.gamedata.add(FLOOR, {
    id: "1",
    encounter_table: "rats",
    encounter_chance: 1,
    rooms: new Set
  });
  setup.gamedata.add(FLOOR, {
    id: "2",
    encounter_table: "ratsgobbo",
    encounter_chance: 0.5,
    rooms: new Set
  });
  setup.gamedata.add(FLOOR, {
    id: "3",
    encounter_table: "goblins",
    encounter_chance: 0.5,
    rooms: new Set
  });
}

setup.assign_rooms_to_floors = function(){
  let rooms = setup.gamedata.getall(ROOM);
  for (const room_id in rooms){
    let floor = room_id.split(':')[0];
    setup.gamedata.get(FLOOR, floor).rooms.add(room_id);
  }
}