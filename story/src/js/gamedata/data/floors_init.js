setup.init_floors = function(){
  const FLOOR = "Floor";

  setup.gamedata.add(FLOOR, {
    id: "1",
    encounter_table: null,
    events: {},
    encounters: {},
    encounter_rate: 0.5,
  });
  setup.gamedata.add(FLOOR, {
    id: "2",
    encounter_table: null,
    events: {},
    encounters: {},
    encounter_rate: 0.5,
  });
  setup.gamedata.add(FLOOR, {
    id: "3",
    encounter_table: null,
    events: {},
    encounters: {},
    encounter_rate: 0.5,
  });
}