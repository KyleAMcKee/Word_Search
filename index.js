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
    let firstLine = input.split('\n')[0];
    return firstLine.split(',');
}

const parsePuzzle = (input) => {
    let puzzle = input.split('\n').slice(1);
    let result = [];
    for (let line of puzzle) {
        result.push(line.split(','));
    }
    return result;
}

module.exports = {
    readFile,
    parseWords,
    parsePuzzle
}