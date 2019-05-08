const { Trie, TrieNode } = require('./trie');

const findPossibleNodes = (puzzle, coordinates) => {
    let directions =    [
                            {x: -1, y: -1}, {x: 0, y: -1}, {x: 1, y: -1},
                            {x: -1, y: 0}, {x: 1, y: 0},
                            {x: -1, y: 1}, {x: 0, y: 1}, {x: 1, y: 1}
                        ];
    let rowMax = puzzle.length;
    let colMax = puzzle[0].length;
    let { x, y } = coordinates;
    let result = [];
    
    directions.forEach(direction => {
        let { x: dX, y: dY } = direction;
        dX += x;
        dY += y;
        if (dX >= colMax || dX < 0 || dY >= rowMax || dY < 0) {
            return;
        }
        result.push({x: dX, y: dY});
    });
    return result;
}

const explorePath = (puzzle, trieNode, direction) => {
    let result = {};
    return result;
}

const findWords = (puzzle, root, possibleNodes) => {
    let result = [];
    possibleNodes.forEach(node => {
        explorePath(puzzle, root, 1);
    });
    return result;
}

const puzzleSolve = (puzzle, trie) => {
    let rowMax = puzzle.length;
    let colMax = puzzle[0].length;
    let result = [];

    for (let row = 0; row < rowMax; row++) {
        for (let col = 0; col < colMax; col++) {
            let currentChar = puzzle[row][col];
            if (currentChar in trie.root.children) {

            }
        }
    }
    return result;
}

const puzzle =  [
    ['A','B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

module.exports = {
    findPossibleNodes,
    puzzleSolve,
    findWords,
    explorePath
}