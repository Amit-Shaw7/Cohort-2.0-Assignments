const fs = require('fs');
const fileCleaner = (path) => {
    const data = fs.readFileSync(path , 'utf-8');
    console.log(data);
    let newData = data.replace(/\s+/g, ' ').trim();
    console.log(newData);
    fs.writeFileSync(path , newData);
}

const path = './file.txt';
fileCleaner(path);