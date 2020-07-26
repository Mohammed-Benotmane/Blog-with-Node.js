const fs = require('fs');
// Read Files

/*
fs.readFile('./docs/test.txt',(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
*/

// Write Files

/*
fs.writeFile('./docs/test.txt','hello world',()=>{
    fs.readFile('./docs/test.txt',(err, data)=>{
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    });
});

*/

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('directory created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('dir deleted');
    });
}