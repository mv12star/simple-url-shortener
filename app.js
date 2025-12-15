function short(data) {
    const sym = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let f = '';
    
    for (let z = 0; z < data.length; z++) {
        f += data.charCodeAt(z).toString(2).padStart(8, '0');
    }

    while (f.length % 5 !== 0) {
        f += '0';
    }

    let output = '';
    for (let y = 0; y < f.length; y += 5) {
        const segment = f.substring(y, y + 5);
        const idx = parseInt(segment, 2);
        output += sym[idx];
    }

    return output.split('').reverse().join('');
}

function long(input) {
    const sym = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    
    input = input.split('').reverse().join('');
    input = input.replace(/=/g, '');
    
    let f = '';
    for (let q = 0; q < input.length; q++) {
        const position = sym.indexOf(input[q]);
        const chunk = position.toString(2).padStart(5, '0');
        f += chunk;
    }

    while (f.length % 8 !== 0) {
        f = f.slice(0, -1);
    }

    let result = '';
    for (let r = 0; r < f.length; r += 8) {
        const block = f.substring(r, r + 8);
        result += String.fromCharCode(parseInt(block, 2));
    }

    return result;
}
