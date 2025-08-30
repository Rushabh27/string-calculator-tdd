function add(numbers) {
    if (numbers === "") return 0;
    if (/^-?\d+$/.test(numbers)) return parseInt(numbers);

    // generic comma separated numbers
    const parts = numbers.split(',');
    if (parts.every(p => /^-?\d+$/.test(p))) {
        return parts.reduce((s, p) => s + Number(p), 0);
    }
    return 0;
}

module.exports = { add };