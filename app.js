const { Trie } = require('./trie');
const { puzzleSolve } = require('./puzzle_solve');
const { readFile, parseWords, parsePuzzle } = require('./index');

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