setup.gamedata = {
    map: {}
};

setup.gamedata.add = function(type, def){
    if (type == null){
        console.error("Tried to add with null type.");
    }
    if (def == null){
        console.error("Tried to add null def.");
    }
    if (def.id == null){
        console.error("Tried to add def with no id.");
    }
    if (this.map[type] == null){
        this.map[type] = {};
    }
    if (this.map[type][def.id] != null){
        console.error("Tried to add duplicate definition for " + def.id);
    }
    this.map[type][def.id] = def;
};

setup.gamedata.get = function(type, id){
    if (id == null || id.length == 0){
        console.error("Tried to get with null or 0-length id.");
    }
    if (type == null){
        console.error("Tried to get with null type.");
    }
    return this.map[type][id];
};

const ENEMY = "Enemy";
const ROOM = "Room";
const FLOOR = "Floor";