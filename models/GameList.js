const Filehelper = require('../helpers/FileHelper')
const ParseHelper = require('../helpers/ParserHelper')
const Game = require('./Game');
const ParserHelper = require('../helpers/ParserHelper');

class GameList{

    constructor(){
        const linhas = Filehelper.getGameLog();
        this._gameList = {}
        var gameCount = 1;
        linhas.forEach(linha => {
            const gameId = 'game_'+gameCount;

            ParserHelper.newGame(linha, ()=>{
                this._gameList[gameId] = new Game();
                return;
            })

            ParseHelper.newPlayer(linha,match =>{
                this._gameList[gameId].addPlayer(match);
                return;
            });

            ParseHelper.kill(linha, matches => {
                this._gameList[gameId].updateKills(matches[1],matches[2]);
                return;
            });

            ParseHelper.endGame(linha, ()=>{
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
}

module.exports = new GameList;