window.start_combat = function(){
	let combat = {};
	combat.playerTeam = [];
	combat.opponents = [];

	combat.attack = function(defender, damage){
		window.alert("Attacking defender for " + damage + " damage!");
		defender.hp = Math.max(0, defender.hp - damage);
	};

	combat.tick = function(){
		let playerAlive = false;
		let opponentAlive = false;
		for (let player in this.playerTeam){
			if (player.hp >= 0){
				playerAlive = true;
			}
		}
		for (let opponent in this.opponents){
			if (opponent.hp >= 0){
				opponentAlive = true;
			}
		}

		this.finished = !playerAlive || !opponentAlive;
		if (this.finished){
			this.won = playerAlive && !opponentAlive;
			this.lost = !this.won;
		}
	};

	combat.finished = false;
	combat.won = false;
	combat.lost = false;
	return combat;
}

let combat = window.start_combat([], []);
combat.tick();