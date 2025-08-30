const { add } = require('../src/calculator');

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
        expect(add("")).toBe(0);
    });
    test('returns the number for a single numeric string', () => {
        expect(add("7")).toBe(7);
    });
    test('sums two comma-separated numbers', () => {
        expect(add("1,5")).toBe(6);
    });
    test('sums any amount of comma-separated numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
    });
    test('handles newline as a delimiter along with comma', () => {
        expect(add("1\n2,3")).toBe(6);
    });
    test('supports custom single-character delimiter using //D\\n syntax', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

});