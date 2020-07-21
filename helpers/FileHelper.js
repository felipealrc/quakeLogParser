const fs = require('fs');
const filePath = './files/8c93cae335d81186698865a864d263ad/games.log';

class FileHelper{

    getGameLog(){
        const contents = fs.readFileSync(filePath,'utf8');
        const lines = contents.split('\n');
        return  lines;
    }
    
}
module.exports = new FileHelper()