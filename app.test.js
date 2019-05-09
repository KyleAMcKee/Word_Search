const { calculateResult } = require('./app');

test('When given valid input, calculateResult returns an array', () => {
    const filePath = './test_files/large.txt';
    expect(Array.isArray(calculateResult(filePath))).toBeTruthy();
})