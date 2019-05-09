const BLUE = '\x1b[34m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const RESET = '\x1b[0m';

const colors = [BLUE, RED, YELLOW, GREEN, CYAN, MAGENTA];

const printCoords = (coords) => {
    let comma = false;
    let coordString = '';
    coords.forEach(coord => {
        comma ? coordString += ',' : null;
        comma = true;
        coordString += `(${coord[0]},${coord[1]})`;
    });
    return coordString;
}

const determineColor = (colorIdx) => {
    return colors[colorIdx % colors.length];
}

const printResults = (results) => {
    let resultString = '';
    let colorIdx = 0;
    results.forEach(result => {
        resultString += `${determineColor(colorIdx)}${result.word}${RESET}: `;
        resultString += printCoords(result.coords);
        resultString += '\n';
        colorIdx ++;
    });
    process.stdout.write(resultString);
}

const printBoard = (puzzle, results) => {
    let boardString = '';
    let colorIdx = 0;
    results.forEach(word => {
        word.coords.forEach(point => {
            let x = point[0];
            let y = point[1];
            puzzle[y][x] = `${determineColor(colorIdx)}${puzzle[y][x]}${RESET}`;
        });
        colorIdx++;
    });
    puzzle.forEach(row => {
        boardString += row + '\n';
    });
    boardString = boardString.replace(/,/g, ' ');
    process.stderr.write('\n');
    process.stdout.write(boardString);
}

module.exports = {
    printResults,
    printCoords,
    printBoard
}