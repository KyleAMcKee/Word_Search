const { printCoords, printResults } = require('../src/print');

test('Given a 2D array of coordinates, printCoords will return a string', () => {
    const coords = [[3,4],[3,5],[3,6],[3,7]];
    expect(typeof printCoords(coords)).toBe('string');
});
test('Given a 2D array of coordinates, printCoords will return a string of coordinates', () => {
    const coords = [[3,4],[3,5],[3,6],[3,7]];
    expect(printCoords(coords)).toEqual('(3,4),(3,5),(3,6),(3,7)');
});

test('Given a word and coordinate array, printResults will print to stdout', () => {
    const wordArray = [];
    const mockStdout = jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
    printResults(wordArray);
    expect(mockStdout).toHaveBeenCalled();
});

test('Given a word and coordinate array, printResults will print formatted output to stdout', () => {
    const wordArray =  [
                            { word: 'LUKE', coords: [[1,1], [2,2], [3,3], [4,4]] },
                            { word: 'HAN', coords: [[0,1], [0,2], [0,3]] },
                        ];
    const mockStdout = jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
    printResults(wordArray);
    expect(mockStdout).toHaveBeenCalledWith('\x1b[34mLUKE\x1b[0m: (1,1),(2,2),(3,3),(4,4)\n\x1b[31mHAN\x1b[0m: (0,1),(0,2),(0,3)\n');
});