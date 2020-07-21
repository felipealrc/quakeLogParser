const GameList = require('../models/GameList');
const gameList = GameList;

module.exports = app => {
    app.get('/games/list/',(req,res)=>{
        res.status(200).send(JSON.stringify(gameList.getGameList()))
    })

    app.get('/games/list/:game_id',(req,res)=>{
        res.status(200).send(JSON.stringify(gameList.getGameById(req.params.game_id)))
    })
}