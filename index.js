const fs = require('fs');

const readFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
}

module.exports = {
    readFile,
}