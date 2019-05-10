const { Trie } = require('./src/trie');
const { puzzleSolve } = require('./src/puzzle_solve');
const { readFile, parseWords, parsePuzzle } = require('./src/parse');
const { printResults, printBoard } = require('./src/print');
const { printUsageToStdout } = require('./src/utils');

let puzzle;
const calculateResult = (filePath) => {
    if (!process.argv[2]) {
        printUsageToStdout(5); 
        process.exit(1);
    }
    let file = readFile(filePath);
    let words = parseWords(file);
    puzzle = parsePuzzle(file);
    let trie = new Trie;
    words.forEach(word => trie.addWord(word));
    let result = puzzleSolve(puzzle, trie);
    return result;
}

const results = calculateResult(process.argv[2]);
printResults(results);
if (process.argv[3]) {
    (process.argv[3] == '--board' || process.argv[3] == '-b') 
        ? printBoard(puzzle, results) 
        : process.stdout.write('Use --board or -b as an optional argument to print the board\n')
}
