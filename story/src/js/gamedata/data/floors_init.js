const FLOOR = "Floor";

setup.init_floors = function(){
  setup.gamedata.add(FLOOR, {
    id: "1",
    encounter_table: "rats",
    encounter_chance: 1,
    rooms: new Set,
    events: {
      "1:0,0": {
        id: "TestEventOnce",
        type: "once", //once, always
        passage:"TestEventOnce",
        closing_text: "You cleared it!",
      }
    }
  });
  setup.gamedata.add(FLOOR, {
    id: "2",
    encounter_table: "ratsgobbo",
    encounter_chance: 0.5,
    rooms: new Set,
    events: {}
  });
  setup.gamedata.add(FLOOR, {
    id: "3",
    encounter_table: "goblins",
    encounter_chance: 0.5,
    rooms: new Set,
    events: {
      "3:2,-1":{
        id: "TestEventAlways",
        type: "always", //once, always
        passage:"TestEventAlways",
        closing_text: "You cleared it!",
      }
    }
  });
}

setup.assign_rooms_to_floors = function(){
  let rooms = setup.gamedata.getall(ROOM);
  for (const room_id in rooms){
    let floor = room_id.split(':')[0];
    setup.gamedata.get(FLOOR, floor).rooms.add(room_id);
  }
}