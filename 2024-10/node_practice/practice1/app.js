const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('an error occurred:',err);
        return;
    }
    console.log(data);
    return data;
});
fs.writeFileSync('output.txt',data,'utf-8');
fs.appendFileSync('output.txt','\nsucceeded in writing and appending to file!');


