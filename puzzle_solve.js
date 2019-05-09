const { Trie, TrieNode } = require('./trie');

/* Check all 8 directions to see if they are still in bounds */
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

/* Explore in the direction we came from, as we know we already have 2 letters matched so far */
const explorePath = (puzzle, trieNode, direction, startingCoordinates, startingChar) => {
    let result = {};
    let { x: currX, y: currY } = startingCoordinates;
    let { x: dirX, y: dirY } = direction;
    let maxRow = puzzle.length;
    let maxCol = puzzle[0].length;
    let word = startingChar + puzzle[currY][currX];
    let numOfChildren = Object.keys(trieNode.children).length;
    let coords = [[currX - dirX, currY - dirY]]

    while (numOfChildren) {
        let newX = currX + dirX;
        let newY = currY + dirY;
        if (newX < 0 || newX >= maxCol || newY < 0 || newY >= maxRow) {
            return 0;
        }
        if (puzzle[newY][newX] in trieNode.children) {
            let char = puzzle[newY][newX];
            trieNode = trieNode.children[char];
            word += char
            coords.push([currX, currY]);
            numOfChildren = Object.keys(trieNode.children).length;
            currX = newX;
            currY = newY;
        } else {
            return 0;
        }
    }
    if (trieNode.endOfWord) {
        coords.push([currX, currY]);
        result = { word: word, coords: coords};
        return result;
    }
    return 0;
}

/* Check in up to 8 directions returned by findpossibleNodes to see if we have a match */
const findWords = (puzzle, root, possibleNodes, coordinates) => {
    let result = [];
    let { x, y } = coordinates;

    possibleNodes.forEach(node => {
        let char = puzzle[node.y][node.x];
        if (char in root.children) {
            let dirX = node.x - x;
            let dirY = node.y - y;
            let direction = { x: dirX, y: dirY }
            let wordFound = explorePath(puzzle, root.children[char], direction, node, puzzle[y][x]);
            if (wordFound) {
                result = [...result, wordFound];
            }
        };
    });
    return result;
}

/* Check every cell in the puzzle and see if that cell is the starting letter of any of our words */
const puzzleSolve = (puzzle, trie) => {
    let rowMax = puzzle.length;
    let colMax = puzzle[0].length;
    let result = [];
    let rootNode = trie.root;

    for (let row = 0; row < rowMax; row++) {
        for (let col = 0; col < colMax; col++) {
            let currentChar = puzzle[row][col];
            if (currentChar in rootNode.children) {
                let coordinates = { x: col, y: row };
                let possibleNodes = findPossibleNodes(puzzle, coordinates);
                let foundWords = findWords(puzzle, rootNode.children[currentChar], possibleNodes, coordinates);
                result = [...result, ...foundWords];
            }
        }
    }
    return result;
}

module.exports = {
    findPossibleNodes,
    puzzleSolve,
    findWords,
    explorePath
}