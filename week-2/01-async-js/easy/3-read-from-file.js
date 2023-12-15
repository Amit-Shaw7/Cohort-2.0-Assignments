const fs = require('fs');

const readFile = async (path , fn) => {
    const data = fs.readFileSync(path, 'utf8');
    console.log(data);
}

readFile('./file.txt');