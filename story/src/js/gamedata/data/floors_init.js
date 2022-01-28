setup.init_floors = function(){
  const FLOOR = "Floor";

  setup.gamedata.add(FLOOR, {
    id: "1",
    encounter_table: "rats",
    encounter_rate: .75
  });
  setup.gamedata.add(FLOOR, {
    id: "2",
    encounter_table: "ratsgobbo",
    encounter_rate: 0.5
  });
  setup.gamedata.add(FLOOR, {
    id: "3",
    encounter_table: "goblins",
    encounter_rate: 0.5
  });
}