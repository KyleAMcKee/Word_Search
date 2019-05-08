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

module.exports = {
    findPossibleNodes
}