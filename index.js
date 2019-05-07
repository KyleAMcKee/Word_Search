const fs = require('fs');
const utils = require('./utils');

const readFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    if (!data) {
        utils.printUsageToStdout(1)
        process.exitCode = 1;
        return;
    } else if (!utils.isValidInput(data)) {
        utils.printUsageToStdout(2);
        process.exitCode = 1;
        return;
    }
    return data;
}

const parseWords = (input) => {
    return [];
}

const parsePuzzle = (input) => {
    return [[]];
}

module.exports = {
    readFile,
    parseWords,
    parsePuzzle
}