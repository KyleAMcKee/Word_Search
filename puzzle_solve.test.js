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

describe('Solver functions return the correct type', () => {
    const puzzle =  [
        ['A','B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
        ['X', 'Y', 'E']
    ];
    const trie = new Trie;
    const words = ['AB', 'IEA', 'CF'];
    const coordinates = {x: 0, y: 0};
    let possibleNodes = findPossibleNodes(puzzle, coordinates);
    words.forEach(word => trie.addWord(word));
    let childNodeTest = trie.root.children['A'];
    let childOfChild = childNodeTest.children['B'];
    let direction = { x: 1, y: 0 };
    let failNodeTest = trie.root.children['I'];
    let childOfFail = failNodeTest.children['E'];
    let failCoords = { x: 2, y: 2 };
    let failDirection = { x: 0, y: 1 };
    
    test('puzzleSolve should return an array', () => {
        expect(Array.isArray(puzzleSolve(puzzle, trie))).toBeTruthy();
    });

    test('findWords should return an array', () => {
        expect(Array.isArray(findWords(puzzle, childNodeTest, possibleNodes, coordinates))).toBeTruthy();
    });

    test('explorePath should return an object when given a match', () => {
        expect(typeof explorePath(puzzle, childOfChild, direction, coordinates, 'A') === 'object').toBeTruthy();
    });

    test('explorePath should return 0 when there is no match', () => {
        expect(explorePath(puzzle, childOfFail, failDirection, failCoords, 'I')).toBe(0);
    })
});

describe('Given small input', () => {
    const puzzle =  [
        ['A','B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I']
    ];
    const trie = new Trie;
    const words = ['AB', 'IEA', 'CF', 'AH', 'GB', 'EFI'];
    words.forEach(word => trie.addWord(word));
    const result = [
        { word: "AB", coords: [[0,0], [1,0]]},
        { word: "CF", coords: [[2,0], [2,1]]},
        { word: "IEA", coords: [[2,2], [1,1], [0,0]]}
    ]
    test('puzzleSolve returns matching words and their coordinates', () => {
        expect(puzzleSolve(puzzle, trie)).toEqual(result);
    });
});

describe('Given medium input', () => {
    const puzzle = [
        ['E','I','B','E','N','I','H','H','L','X'],
        ['I','V','R','N','L','Y','N','Z','I','J'],
        ['G','M','J','A','N','H','B','I','S','P'],
        ['G','M','A','R','G','E','A','X','A','C'],
        ['A','E','E','X','H','I','R','U','E','K'],
        ['M','R','E','M','O','H','T','L','J','S'],
        ['C','T','K','Z','M','J','Q','N','L','X'],
        ['E','T','J','K','X','X','E','O','Z','H'],
        ['K','Y','S','V','V','S','O','X','Y','P'],
        ['O','G','C','W','W','H','P','W','N','O']
    ];
    const trie = new Trie;
    const words = ['HOMER','MARGE','BART','LISA','MAGGIE','MOE','WILLIE'];
    words.forEach(word => trie.addWord(word));
    const result = [
        { word: "LISA", coords: [[8, 0], [8, 1], [8, 2], [8, 3]] },
        { word: "BART", coords: [[6, 2], [6, 3], [6, 4], [6, 5]] },
        { word: "MARGE", coords: [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
        { word: "MAGGIE", coords: [[0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0,0]] },
        { word: "HOMER", coords: [[5, 5], [4, 5], [3, 5], [2, 5], [1, 5]] },
    ];
    test('puzzleSolve returns matching words and their coordinates', () => {
        expect(puzzleSolve(puzzle, trie)).toEqual(result);
    });
});

describe('Given large input', () => {
    const puzzle = [
        ['U','M','K','H','U','L','K','I','N','V','J','O','C','W','E'],
        ['L','L','S','H','K','Z','Z','W','Z','C','G','J','U','Y','G'],
        ['H','S','U','P','J','P','R','J','D','H','S','B','X','T','G'],
        ['B','R','J','S','O','E','Q','E','T','I','K','K','G','L','E'],
        ['A','Y','O','A','G','C','I','R','D','Q','H','R','T','C','D'],
        ['S','C','O','T','T','Y','K','Z','R','E','P','P','X','P','F'],
        ['B','L','Q','S','L','N','E','E','E','V','U','L','F','M','Z'],
        ['O','K','R','I','K','A','M','M','R','M','F','B','A','P','P'],
        ['N','U','I','I','Y','H','Q','M','E','M','Q','R','Y','F','S'],
        ['E','Y','Z','Y','G','K','Q','J','P','C','Q','W','Y','A','K'],
        ['S','J','F','Z','M','Q','I','B','D','B','E','M','K','W','D'],
        ['T','G','L','B','H','C','B','E','C','H','T','O','Y','I','K'],
        ['O','J','Y','E','U','L','N','C','C','L','Y','B','Z','U','H'],
        ['W','Z','M','I','S','U','K','U','R','B','I','D','U','X','S'],
        ['K','Y','L','B','Q','Q','P','M','D','F','C','K','E','A','B']
    ]
    const trie = new Trie;
    const words = ['BONES','KHAN','KIRK','SCOTTY','SPOCK','SULU','UHURA'];
    words.forEach(word => trie.addWord(word));
    const result = [
        { word: 'UHURA', coords: [[4,0],[3,1],[2,2],[1,3],[0,4]] },
        { word: 'SPOCK', coords: [[2,1],[3,2],[4,3],[5,4],[6,5]] },
        { word: 'SULU', coords: [[3,3],[2,2],[1,1],[0,0]] },
        { word: 'SCOTTY', coords: [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]] },
        { word: 'BONES', coords: [[0,6],[0,7],[0,8],[0,9],[0,10]] },
        { word: 'KIRK', coords: [[4,7],[3,7],[2,7],[1,7]] },
        { word: 'KHAN', coords: [[5,9],[5,8],[5,7],[5,6]] }
    ];
    test('puzzleSolve returns matching words and their coordinates', () => {
        expect(puzzleSolve(puzzle, trie)).toEqual(result);
    });
});