// MY OWN CODE

function convertToRoman(num) {

    let one = "I";
    let five = "V";
    let ten = "X";
    let fifty = "L"
    let hundred = "C";
    let fivehundred = "D";
    let thousand = "M";
    let roman = [];
    let arr = (num).toString(10).split("");

    arr = arr.map(function(x) {
        return parseInt(x, 10);
    });

    for (let i = 0; i < arr.length; i++) {
        let count = arr[i];

        if (i === (arr.length - 4)) {
            if (count === 9) {
                roman.push(thousand);
                roman.push(ten);
            } else if (count === 4) {
                roman.push(thousand);
                roman.push(fivehundred);
            } else if (count === 5)
                roman.push(fivehundred);
            else if (count >= 1 && count <= 3) {
                while (count > 0) {
                    roman.push(thousand);
                    count--;
                }
            } else if (count >= 6 && count <= 8) {
                roman.push(fivehundred);
                while (count > 5) {
                    roman.push(thousand);
                    count--;
                }
            }
        }



        if (i === (arr.length - 3)) {
            if (count === 9) {
                roman.push(hundred);
                roman.push(thousand);
            } else if (count === 4) {
                roman.push(hundred);
                roman.push(fivehundred);
            } else if (count === 5)
                roman.push(fivehundred);
            else if (count >= 1 && count <= 3) {
                while (count > 0) {
                    roman.push(hundred);
                    count--;
                }
            } else if (count >= 6 && count <= 8) {
                roman.push(fivehundred);
                while (count > 5) {
                    roman.push(hundred);
                    count--;
                }
            }
        }

        if (i === (arr.length - 2)) {
            if (count === 9) {
                roman.push(ten);
                roman.push(hundred);
            } else if (count === 4) {
                roman.push(ten);
                roman.push(fifty);
            } else if (count === 5)
                roman.push(fifty);
            else if (count >= 1 && count <= 3) {
                while (count > 0) {
                    roman.push(ten);
                    count--;
                }
            } else if (count >= 6 && count <= 8) {
                roman.push(fifty);
                while (count > 5) {
                    roman.push(ten);
                    count--;
                }
            }
        } else if (i === (arr.length - 1)) {
            if (count >= 1 && count <= 3) {
                while (count > 0) {
                    roman.push(one);
                    count--;
                }
            } else if (count === 5)
                roman.push(five);
            else if (count === 4) {
                roman.push(one);
                roman.push(five);
            } else if (count === 9) {
                roman.push(one);
                roman.push(ten);
            } else if (count >= 6 && count <= 8) {
                roman.push(five);
                while (count > 5) {
                    roman.push(one);
                    count--;
                }
            }
        }
    }
    roman = roman.join("");
    return roman;
}

console.log(convertToRoman(83));

// EXEMPLE SOLUTION

var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanized = "";

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
};

// test here
convertToRoman(36);