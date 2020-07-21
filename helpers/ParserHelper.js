class ParserHelper{
    newGame(linha, callback){
        if(!/InitGame/.test(linha)) return
        callback();
    }
    kill(linha, callback){
        if(!/Kill/.test(linha))
            return;
        const matches = linha.match(/\d\:\s(.*)\skilled\s(.*)\sby/);
        callback(matches);
    }
    newPlayer(linha, callback){
        if(!/ClientUserinfoChanged/.test(linha))
            return;
        const match = linha.match(/n\\([^\\]*)\\t/)[1];
        callback(match);
    }
    endGame(linha,callback){
        if(!/ShutdownGame/i.test(linha)) 
            return;
        callback();
        
    }


}
module.exports = new ParserHelper;