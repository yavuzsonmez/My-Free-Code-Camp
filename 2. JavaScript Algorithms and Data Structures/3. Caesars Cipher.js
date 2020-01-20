// MY OWN CODE

function rot13(str) { // LBH QVQ VG!

    str = str.split("");
    const regex = RegExp(/\w/);

    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            str[i] = str[i].replace(str[i], str[i].charCodeAt(str[i]));
            str[i] = parseInt(str[i], 10);
            if (str[i] >= 65 && str[i] <= 77)
                str[i] = String.fromCharCode(str[i] + 13);
            else if (str[i] >= 78 && str[i] <= str[i] <= 90)
                str[i] = String.fromCharCode(str[i] - 13);
        }
    }
    str = str.join("");
    return str;
}

// Change the inputs below to test
console.log(rot13("SERR YBIR?"));

// EXEMPLE SOLUTION

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
        .split('')
        .map(char => {
            const pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
        })
        .join('');
}