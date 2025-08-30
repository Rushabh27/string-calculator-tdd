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
    test('throws with message listing all negatives', () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
    });
    test('ignores numbers greater than 1000', () => {
        expect(add("2,1001,3")).toBe(5);
    });
    test('supports multi-character custom delimiter in brackets', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });
    test('supports multiple custom delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

});