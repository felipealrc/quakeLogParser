const Filehelper = require('../helpers/FileHelper')
const Game = require('./Game');
class GameList{

    constructor(){
        const linhas = Filehelper.getGameLog();
        this._gameList = {}
        var gameCount = 1;
        linhas.forEach(linha => {

            const gameId = 'game_'+gameCount;

            if(/InitGame/i.test(linha)) {
                this._gameList[gameId] = new Game();
            }

            if(/ClientUserinfoChanged/.test(linha)){
                const match = linha.match(/n\\([^\\]*)\\t/)[1];
                this._gameList[gameId].addPlayer(match);
            }

            if(/Kill/.test(linha)){
                const matches = linha.match(/\d\:\s(.*)\skilled\s(.*)\sby/);
                this._gameList[gameId].updateKills(matches[1],matches[2]);
            }

            if(/ShutdownGame/i.test(linha)){
                gameCount++;
            }

        });
    }

   getGameList(){
        return JSON.stringify(this._gameList);
    }

   getGameById(id){
       const game = (this._gameList[id])? this._gameList[id]: {};
       return JSON.stringify(game);
    }
}

module.exports = new GameList;