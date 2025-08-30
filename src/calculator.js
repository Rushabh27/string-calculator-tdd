function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
}

function add(numbers) {
    if (numbers === "") return 0;
    if (/^-?\d+$/.test(numbers)) return parseInt(numbers);

    let input = numbers;
    let delimiterPattern = /,|\n/;

    if (input.startsWith('//')) {
        const nl = input.indexOf('\n');
        const raw = input.slice(2, nl); // e.g. ';' or '[***]' etc.
        // for now support single-char or bracketed; pattern updated in later steps
        delimiterPattern = new RegExp(escapeRegExp(raw));
        input = input.slice(nl + 1);
    }

    const tokens = input.split(delimiterPattern).filter(t => t.length > 0);
    console.log(tokens);
    if (!tokens.every(t => /^-?\d+$/.test(t))) throw new Error('invalid input');

    return tokens.reduce((sum, t) => sum + Number(t), 0);
}

module.exports = { add };