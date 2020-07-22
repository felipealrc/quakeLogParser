const chai = require('chai');
const expect = chai.expect;

const Game = require('../models/Game');
const KillByMeans = require('../models/KillByMeans');

describe('model Games', () =>{
    it('Adição de um player na partida',(done)=>{
       const game = new Game();
       game.addPlayer('Felipe');
       expect(game).deep.equal({
           "players": [
               "Felipe"
            ],
            "kills":{
                "Felipe": 0
            },
            "total_kills":0
        });
        done();
    })

    it('Adição de dois players',(done)=>{
       const game = new Game();
       game.addPlayer('Felipee');
       game.addPlayer('Nandaa');
       expect(game).deep.equal({
        "players": [
            "Felipee","Nandaa"
         ],
         "kills":{
             "Felipee": 0,
             "Nandaa": 0
         },
         "total_kills":0
     })
     done();
    });

    it('morte pelo mundo, deve somar o totalkill mas subtrair o frag do player',(done)=>{
        const game = new Game();
        game.addPlayer('Felipe');
        game.updateKills('<world>','Felipe')
        expect(game).deep.equal({
            "players": [
                "Felipe"
            ],
            "kills":{
                "Felipe": -1
            },
            "total_kills":1
        });
        done();
    });
    
    it('morte por outro player, deve somar o totalkill e atribuir o a morte',(done)=>{
        const game = new Game();
        game.addPlayer('Felipe');
        game.addPlayer('Nata');
        game.updateKills('Nata','Felipe')
        expect(game).deep.equal({
            "players": [
                "Felipe",
                "Nata"
            ],
            "kills":{
                "Felipe": 0,
                "Nata":1

            },
            "total_kills":1
        });
        done();
    })
});



describe('Model Kill', () =>{
    it('Uma partida sem Mortes',(done) =>{
        const kill = new KillByMeans();
        expect(kill).deep.equal({
            "kills_by_means":{}
        });

        done();
    })

    it('partida com 3 mortes 2 armas',(done) =>{
        const kill = new KillByMeans();
        kill.addKill('arma1');
        kill.addKill('arma1');
        kill.addKill('arma2');
        expect(kill).deep.equal({
            "kills_by_means":{
                "arma1":2,
                "arma2":1
            }
        });

        done();
    })
});