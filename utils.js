const isValidInput = (string) => {
    let lines = string.split('\n');
    for (let line of lines) {
        if (!/^[A-Z,]+$/.test(line)) {
            return false;
        }
    }
    return true
}

const isValidPuzzleDimensions = (puzzle) => {
    return puzzle.length === puzzle[0].length;
}

const printUsageToStdout = (code) => {
    if (code === 1) {
        process.stdout.write('Input file must not be empty\n');
    } else if (code === 2) {
        process.stdout.write('Input file must only contain capital letters separated by commas\n');
    } else if (code === 3) {
        process.stdout.write('Puzzle dimensions must be a square\n');
    }
}

module.exports = {
    isValidInput,
    printUsageToStdout,
    isValidPuzzleDimensions
}