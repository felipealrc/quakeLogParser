const Filehelper = require('../helpers/FileHelper')
const ParserHelper = require('../helpers/ParserHelper');

const Game = require('./Game');
const KillByMeans = require('./KillByMeans');

class List{

    constructor(){
        const linhas = Filehelper.getGameLog();
        
        this._gameList = {};
        this._killsList = {}
        var gameCount = 1;

        linhas.forEach(linha => {

            const gameId = 'game_' + gameCount;

            ParserHelper.newGame(linha, ()=>{
                this._gameList[gameId] = new Game();
                this._killsList[gameId] = new KillByMeans();
                return;
            })

            ParserHelper.newPlayer(linha,match =>{
                this._gameList[gameId].addPlayer(match);
                return;
            });

            ParserHelper.kill(linha, matches => {
                this._gameList[gameId].updateKills(matches[1],matches[2]);
                this._killsList[gameId].addKill(matches[3]);
                return;
            });
            
            ParserHelper.endGame(linha, ()=>{
                gameCount++;
                return;
            })
        });
    }

   getGameList(){
        return JSON.stringify(this._gameList);
    }
   getGameById(id){
       const game = (this._gameList[id])? this._gameList[id]: {};
       return JSON.stringify(game);
    }
    getKillList(){
        return JSON.stringify(this._killsList);
    }
}

module.exports = new List;