const fs = require('fs');
const utils = require('./utils');

const readFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');

    if (!data) {
        utils.printUsageToStdout(1)
        process.exit(1);
    } else if (!utils.isValidInput(data)) {
        utils.printUsageToStdout(2);
        process.exit(1);
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

    if (!puzzle.length) {
        utils.printUsageToStdout(4);
        process.exit(1);
        return; // Needed for testing as jest will continue executing code instead of exiting
    }
    for (let line of puzzle) {
        result.push(line.split(','));
    }
    if (!utils.isValidPuzzleDimensions(result)) {
        utils.printUsageToStdout(3);
        process.exit(1);
    }
    return result;
}

module.exports = {
    readFile,
    parseWords,
    parsePuzzle
}