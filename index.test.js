const functions = require('./index');


/* --- FILE INPUT --- */
test('Reading from a file returns a string', () => {
    const data = functions.readFile('test_files/simpsons_one_line.txt');
    expect(typeof data).toBe('string');
});
test('Read words line from file', () => {
    const testFile = 'test_files/simpsons_one_line.txt';
    expect(functions.readFile(testFile)).toBe('HOMER,MARGE,BART,LISA,MAGGIE');
});

test('Exit if input is invalid because of restricted characters', () => {
    const testFile = 'test_files/invalid_chars.txt';
    const mockStdout = jest.spyOn(process.stdout, 'write');
    functions.readFile(testFile);
    expect(mockStdout).toHaveBeenCalledWith('Input file must only contain capital letters separated by commas\n');
});

test('Input file should not be empty', () => {
    const testFile = 'test_files/empty.txt';
    const mockStdout = jest.spyOn(process.stdout, 'write');
    functions.readFile(testFile);
    expect(mockStdout).toHaveBeenCalledWith('Input file must not be empty\n');
});

/* --- INPUT PARSING --- */
test('parseWords function should return an array', () => {
    const testFile = 'test_files/simpsons.txt';
    const data = functions.readFile(testFile);
    const wordArray = functions.parseWords(data);
    expect(Array.isArray(wordArray)).toBe(true);
});

test('parsePuzzle function should return a 2D array', () => {
    const testFile = 'test_files/simpsons.txt';
    const data = functions.readFile(testFile);
    const puzzleArray = functions.parsePuzzle(data);
    expect(Array.isArray(puzzleArray)).toBe(true);
    expect(Array.isArray(puzzleArray[0])).toBe(true);
});

test('parseWords function should return an array of strings', () => {
    const testFile = 'test_files/simpsons.txt';
    const data = functions.readFile(testFile);
    const wordsArray = functions.parseWords(data);
    expect(wordsArray).toEqual(['HOMER','MARGE','BART','LISA','MAGGIE']);
});

test('parsePuzzle function should return an array of arrays of letters', () => {
    const testFile = 'test_files/simpsons.txt';
    const data = functions.readFile(testFile);
    const puzzleArray  = functions.parsePuzzle(data);
    expect(puzzleArray).toEqual([
                                    ['E', 'I', 'B','E', 'N', 'I','H', 'H', 'L','X'],
                                    ['I', 'V', 'R','N', 'L', 'Y','N', 'Z', 'I','J'],
                                    ['G', 'M', 'J','A', 'N', 'H','B', 'I', 'S','P'],
                                    ['G', 'M', 'A','R', 'G', 'E','A', 'X', 'A','C'],
                                    ['A', 'E', 'E','X', 'H', 'I','R', 'U', 'E','K'],
                                    ['M', 'R', 'E','M', 'O', 'H','T', 'L', 'J','S'],
                                    ['C', 'T', 'K','Z', 'M', 'J','Q', 'N', 'L','X'],
                                    ['E', 'T', 'J','K', 'X', 'X','E', 'O', 'Z','H'],
                                    ['K', 'Y', 'S','V', 'V', 'S','O', 'X', 'Y','P'],
                                    ['O', 'G', 'C','W', 'W', 'H','P', 'W', 'N','O']
                                ]
    ); 
})