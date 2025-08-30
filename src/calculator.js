function add(numbers) {
    if (numbers === "") return 0;
    if (/^-?\d+$/.test(numbers)) return parseInt(numbers);

    // split by comma or newline
    const tokens = numbers.split(/,|\n/).filter(t => t.length > 0);
    if (!tokens.every(t => /^-?\d+$/.test(t))) {
        throw new Error('invalid input');
    }

    return tokens.reduce((sum, t) => sum + Number(t), 0);

}

module.exports = { add };