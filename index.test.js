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