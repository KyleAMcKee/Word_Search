const { findPossibleNodes, puzzleSolve, findWords, explorePath } = require('./puzzle_solve');
const { Trie } = require('./trie');

describe('Given the coordinates (0, 0)', () => {
    const coordinates = {x: 0, y: 0};
    const puzzle =  [
                        ['A','B', 'C'],
                        ['D', 'E', 'F'],
                        ['G', 'H', 'I']
                    ];
    const expectedResult =  [
                                {x: 1, y: 0},
                                {x: 0, y: 1},
                                {x: 1, y: 1}
                            ]
    test('findPossibleNodes should return an array', () => {
        expect(Array.isArray(findPossibleNodes(puzzle, coordinates))).toBeTruthy();
    });
    test('findPossibleNodes should return 3 values', () => {
        expect(findPossibleNodes(puzzle, coordinates).length).toBe(3);
    });
    test('findPossibleNodes should return {1,0}, {1,1}, {0,1}', () => {
        expect(findPossibleNodes(puzzle, coordinates)).toEqual(expectedResult);
    });
});

describe('Given the coordinates (1, 1)', () => {
    const coordinates = {x: 1, y: 1};
    const puzzle =  [
                        ['A','B', 'C'],
                        ['D', 'E', 'F'],
                        ['G', 'H', 'I']
                    ];
    const expectedResult =  [
                        {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0},
                        {x: 0, y: 1}, {x: 2, y: 1},
                        {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}
                    ]
    test('findPossibleNodes should return an array', () => {
        expect(Array.isArray(findPossibleNodes(puzzle, coordinates))).toBeTruthy();
    });

    test('findPossibleNodes should return 8 values', () => {
        expect(findPossibleNodes(puzzle, coordinates).length).toBe(8);
    });
    test('findPossibleNodes should return 8 coordinates that surround the given coordinate', () => {
        expect(findPossibleNodes(puzzle, coordinates)).toEqual(expectedResult);
    });
});

describe('Given the coordinates (2, 2)', () => {
    const coordinates = {x: 2, y: 2};
    const puzzle =  [
                        ['A','B', 'C'],
                        ['D', 'E', 'F'],
                        ['G', 'H', 'I']
                    ];
    const expectedResult =  [
                                {x: 1, y: 1},
                                {x: 2, y: 1},
                                {x: 1, y: 2}
                            ]
    test('findPossibleNodes should return an array', () => {
        expect(Array.isArray(findPossibleNodes(puzzle, coordinates))).toBeTruthy();
    });
    test('findPossibleNodes should return 3 values', () => {
        expect(findPossibleNodes(puzzle, coordinates).length).toBe(3);
    });
    test('findPossibleNodes should return (1,1), (2,1), (1,2)', () => {
        expect(findPossibleNodes(puzzle, coordinates)).toEqual(expectedResult);
    });
});

describe('When given input', () => {
    const puzzle =  [
        ['A','B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I']
    ];
    const coordinates = {x: 1, y: 1};
    const trie = new Trie;
    let possibleNodes = findPossibleNodes(puzzle, coordinates);

    test('puzzleSolve should return an array', () => {
        expect(Array.isArray(puzzleSolve(puzzle, trie))).toBeTruthy();
    });

    test('findWords should return an array', () => {
        expect(Array.isArray(findWords(puzzle, trie, possibleNodes))).toBeTruthy();
    });

    test('explorePath should return an object', () => {
        expect(typeof explorePath(puzzle, trie.root, 1) === 'object').toBeTruthy();
    });
});