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
    let code = "";
    for (let i = 0; i < expr.length; i += 2) {
        let tmp = "";
        if ((i) % 10 === 0 && i !== 0) {
            code += ' '
        }
        if (expr[i] === '*'){
            i += 8;
            code += '/ ';
            continue;
        }
        tmp += expr[i];
        tmp += expr[i + 1];
        if (tmp === '10') {
            code += '.';
        } else if (tmp === '11') {
            code += '-';
        } else if (tmp === '00'){
        }
    }
    let keys = Object.keys(MORSE_TABLE);
    let values = Object.values(MORSE_TABLE);
    let arr = code.split(' ');
    arr = arr.map(x => {
        if(x === '/'){
            return ' ';
        }
        let iter =  0;
        while (x !== keys[iter] && iter < keys.length){
            iter++;
        }
        return values[iter];
    });
    return arr.join('');
}

module.exports = {
    decode
}