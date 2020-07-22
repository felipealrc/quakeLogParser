class KillByMeans{

    constructor(){
        this.kills_by_means = {};
    }
    
    addKill(weapon){
        if(!this.kills_by_means[weapon]){
            this.kills_by_means[weapon] = 0;
        }
        this.kills_by_means[weapon]++;
    }
}
module.exports = KillByMeans;