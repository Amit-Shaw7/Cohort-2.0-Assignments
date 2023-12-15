const fs = require('fs');

const readFile = async (readPath , writePath) => {
    const data = fs.readFileSync(readPath, 'utf8');
    fs.writeFileSync(writePath, data);
}

const readPath = './file.txt';
const writePath = './fileToWriteIn.txt';
readFile(readPath, writePath);