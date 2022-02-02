const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = [];
    const morseDotsDashes = {'00':'',
                         '10':'.', 
                         '11': '-',
                         '**': ' '}
    
    for (let i = 0; i < expr.length; i += 10) {
        newExpr.push(expr.slice(i, i + 10));
    }

    newExpr = newExpr.map(item => item.match(/.{1,2}/g));

    for (let i = 0; i < newExpr.length; i++) {
        newExpr[i] = newExpr[i].reduce((prev, item) => prev + morseDotsDashes[item], '');
    }

    newExpr = newExpr.map(item => item == false ? ' ' : MORSE_TABLE[item]).join('');
    console.log(newExpr);

    return newExpr
}

module.exports = {
    decode
}