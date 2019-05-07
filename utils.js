const isValidInput = (string) => {
    return /^[A-Z,]+$/.test(string);
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