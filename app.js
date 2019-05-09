const { Trie } = require('./src/trie');
const { puzzleSolve } = require('./src/puzzle_solve');
const { readFile, parseWords, parsePuzzle } = require('./src/parse');

const calculateResult = (filePath) => {
    let file = readFile(filePath);
    let words = parseWords(file);
    let puzzle = parsePuzzle(file);
    let trie = new Trie;
    words.forEach(word => trie.addWord(word));
    let result = puzzleSolve(puzzle, trie);
    return result;
}

//calculateResult(process.argv[2]);

module.exports = {
    calculateResult
}