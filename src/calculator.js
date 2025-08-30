function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseHeaderDelimiters(header) {
    // header could be single like ';' or bracketed like '[***]' or '[*][%]' (multi)
    if (!header.startsWith('[')) return [header];
    const delims = [];
    let buf = '';
    let inBr = false;
    for (const ch of header) {
        if (ch === '[') { inBr = true; buf = ''; }
        else if (ch === ']') { inBr = false; delims.push(buf); buf = ''; }
        else if (inBr) { buf += ch; }
    }
    return delims;
}

function add(numbers) {
    if (numbers === "") return 0;
    if (/^-?\d+$/.test(numbers)) return parseInt(numbers);

    let input = numbers;
    let delimiterPattern = /,|\n/;

    if (input.startsWith('//')) {
        const nl = input.indexOf('\n');
        const header = input.slice(2, nl);
        input = input.slice(nl + 1);
        const delims = parseHeaderDelimiters(header);
        const pattern = delims.map(d => escapeRegExp(d)).join('|');
        delimiterPattern = new RegExp(pattern);
    }

    const tokens = input.split(delimiterPattern).filter(t => t.length > 0);
    console.log(tokens);
    if (!tokens.every(t => /^-?\d+$/.test(t))) throw new Error('invalid input');

    const values = tokens.map(Number);
    const negatives = values.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return values
        .filter(n => n <= 1000)
        .reduce((sum, n) => sum + n, 0);
}

module.exports = { add };