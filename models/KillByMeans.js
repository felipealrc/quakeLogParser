class KillByMeans{

    constructor(){
        this.kills_by_means = {};
    }
    
    addKill(death){
        console.log(JSON.stringify(this.kills_by_means) +' - - '+death)
        if(!this.kills_by_means[death]){
            this.kills_by_means[death] = 0;
        }
        this.kills_by_means[death]++;
    }
}
module.exports = KillByMeans;