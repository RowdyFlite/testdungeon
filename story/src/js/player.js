window.get_next_level_threshold = function(current_level){
	return 5 + current_level * 5;
}

window.get_att_for_level = function(current_level){
	return 1 + current_level;
}

window.get_maxhp_for_level = function(current_level){
	return 10 + (current_level - 1) * 2;
}