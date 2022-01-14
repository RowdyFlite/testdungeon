window.start_combat = function(){
	let combat = {};
	combat.playerTeam = [];
	combat.opponents = [];

	combat.attack = function(defender, damage){
		defender.hp = Math.max(0, defender.hp - damage);
	};

	combat.tick = function(){
		let playerAlive = false;
		let opponentAlive = false;
		this.playerTeam.forEach(player => {
			if (player.hp >= 0){
				playerAlive = true;
			}
		});

		this.opponents.forEach(opponent => {
			if (opponent.hp >= 0){
				opponentAlive = true;
			}
		});

		if (!playerAlive){
			this.finished = true;
			this.won = false;
			this.lost = true;
		}
		else if (!opponentAlive){
			this.finished = true;
			this.won = false;
			this.lost = true;	
		}
	};

	combat.finished = false;
	combat.won = false;
	combat.lost = false;
	return combat;
}