class Game{

    constructor(){

        this.players = [];
        this.kills = {};
        this.total_kills = 0;

    }
    
    addPlayer(player){

        if(this.players.includes(player))
            return;

        this.players.push(player);
        this.kills[player] = 0;

    }

    updateKills(killer,killed){
        if(killer == '<world>')
            this.kills[killed] -= 1;
        else
            this.kills[killer] +=1;
        
        this.updateTotalKills();   
    }

    updateTotalKills(){
        this.total_kills++;
    }
}

module.exports = Game;