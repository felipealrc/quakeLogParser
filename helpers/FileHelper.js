const fs = require('fs');
const filePath = './files/games.log';

class FileHelper{

    getGameLog(){
        const contents = fs.readFileSync(filePath,'utf8');
        const lines = contents.split('\n');
        return  lines;
    }
    
}
module.exports = new FileHelper()