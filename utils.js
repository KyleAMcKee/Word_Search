const isValidInput = (string) => {
    let lines = string.split('\n');
    for (let line of lines) {
        if (!/^[A-Z,]+$/.test(line)) {
            return false;
        }
    }
    return true
}

const printUsageToStdout = (code) => {
    if (code === 1) {
        process.stdout.write('Input file must not be empty\n');
    } else if (code === 2) {
        process.stdout.write('Input file must only contain capital letters separated by commas\n');
    }
}

module.exports = {
    isValidInput,
    printUsageToStdout
}