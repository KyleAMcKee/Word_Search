const functions = require('./index');


/* --- FILE INPUT --- */
test('Reading from a file returns a string', () => {
    const data = functions.readFile('simpsons.txt');
    expect(typeof data).toBe('string');
});
test('Read words line from file', () => {
    const testFile = 'simpsons.txt'
    expect(functions.readFile('simpsons.txt')).toBe('HOMER,MARGE,BART,LISA,MAGGIE');
});
