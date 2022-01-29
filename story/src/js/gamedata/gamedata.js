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
        console.error("Tried to add def of type " + type + " with no id.");
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
    if (!this.map.hasOwnProperty(type)){
        console.error("Tried to get with type " + type + " but there is no gamedata.");
    }
    return this.map[type][id];
};

setup.gamedata.getall = function(type){
    if (!this.map.hasOwnProperty(type)){
        console.error("Tried to getall with type " + type + " but there is no gamedata.");
    }
    return this.map[type];
}