const Filehelper = require('../helpers/FileHelper')

module.exports = app => {
    app.get('/readfile',(req,res)=>{
        console.log(Filehelper.getGameLog())
       res.send('ok')
    })
}