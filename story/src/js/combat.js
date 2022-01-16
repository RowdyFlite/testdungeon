window.start_combat = function(){
	let combat = {};
	combat.playerTeam = new Set();
	combat.opponents = new Set();
	combat.combatants = {};

	combat.getCombatant = function(id){
		return this.combatants[id];
	}

	combat.addPlayer = function(id, combatant){
		this.combatants[id] = combatant;
		this.playerTeam.add(id);
	};

	combat.addOpponent = function(id, combatant){
		this.combatants[id] = combatant;
		this.opponents.add(id);
	};

	combat.addOpponents = function(combatants){
		for (const opponent in combatants){
			this.addOpponent(opponent.id, opponent);
		}
	};

	combat.attack = function(attackerId, defenderId){
		let dmg = this.combatants[attackerId].damage;
		let defender = this.combatants[defenderId];
		defender.hp = Math.max(0, defender.hp - dmg);
	};

	combat.tick = function(){
		let playerAlive = false;
		let opponentAlive = false;
		for (let id of this.playerTeam){
			if (this.getCombatant(id).hp > 0){
				playerAlive = true;
			}
		}
		for (let id of this.opponents){
			if (this.getCombatant(id).hp > 0){
				opponentAlive = true;
			}		
		}

		if (!playerAlive){
			this.finished = true;
			this.won = false;
			this.lost = true;
		}
		else if (!opponentAlive){
			this.finished = true;
			this.won = true;
			this.lost = false;	
		}
	};

	combat.finished = false;
	combat.won = false;
	combat.lost = false;
	return combat;
}