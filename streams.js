const fs = require('fs');

const readStream =  fs.createReadStream('./docs/test.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/test1.txt');

/*
readStream.on('data',(chunk)=>{
    console.log('--- NEW CHUNK ---');
    console.log(chunk);
    writeStream.write("\n NEW CHUNKKKKK \n");
    writeStream.write(chunk);
})
*/

readStream.pipe(writeStream);