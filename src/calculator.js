function add(numbers) {
    if (numbers === "") return 0;
    if (/^-?\d+$/.test(numbers)) return parseInt(numbers);

    // simple comma handling for two numbers (will generalize next)
    const parts = numbers.split(',');
    if (parts.length === 2 && parts.every(p => /^-?\d+$/.test(p))) {
        return Number(parts[0]) + Number(parts[1]);
    }
    return 0;
}

module.exports = { add };