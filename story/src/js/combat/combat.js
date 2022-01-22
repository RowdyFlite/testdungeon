var combat_service = {

};

combat_service.create_combat = function(){
    return {
        combatants = {};
        teams = [2];
    };
}

combat_service.start_new_combat = function(){
    this.current_combat = {};
}

combat_service.end_combat = function(){
    this.current_combat = null;
}