const List = require('../models/List')
const list = List;

module.exports = app => {
    app.get('/games/list/',(req,res)=>{

        const gameList = list.getGameList();
        
        res.status(200).send(gameList)
    })

    app.get('/games/list/:id',(req,res)=>{

        const id = req.params.id;
        const item = list.getGameById(id);

        res.status(200).send(item)
    })

    app.get('/games/kills/',(req,res)=>{
        res.status(200).send(list.getKillList());
    })

}