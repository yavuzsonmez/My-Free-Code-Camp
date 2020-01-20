// MY OWN CODE

function telephoneCheck(str) {

    str = str.split("");
    const regex = RegExp(/\d/);


    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i]))
            str[i] = parseInt(str[i], 10);
    }

    let i = 0;
    while (i < 1) {
        if (typeof str[i] === "number" || str[i] === "(")
            i++;
        else
            return false;
    }
    while (i === 1) {
        if (str[i - 1] === "(" && typeof str[i] === "number")
            i += 2;
        else if (str[i - 1] === 1 && str[i] === " ")
            i += 2;
        else if (typeof str[i - 1] === "number" && typeof str[i] === "number")
            i += 2;
        else if (str[i - 1] === 1 && str[i] === "(")
            i += 2;
        else
            return false;
    }
    while (i === 3) {
        if (typeof str[i - 1] === "number" && typeof str[i] === "number")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === " ")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === "-")
            i += 2;
        else if (str[i - 1] === "(" && typeof str[i] === "number")
            i += 2;
        else
            return false;
    }
    while (i === 5) {
        if (typeof str[i - 1] === "number" && typeof str[i] === "number")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === ")" && str[i - 4] === "(")
            i += 2;
        else if (str[i - 1] === " " && str[i] === ")")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === " ")
            i += 2;
        else if (str[i - 1] === ")" && str[i] === " ")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === "-")
            i += 2;
        else if (str[i - 1] === ")" && typeof str[i] === "number")
            i += 2;
        else
            return false;
    }
    while (i === 7) {
        if (typeof str[i - 1] === "number" && typeof str[i] === "number")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === "-")
            i += 2;
        else if (typeof str[i - 1] === "number" && str[i] === " ")
            i += 2;
        else if (str[i - 1] === ")" && str[i] === " ")
            i += 2;
        else
            return false;
    }
    while (i === 9) {
        if (typeof str[i - 1] === "number" && typeof str[i] === "number")
            i++;
        else if (typeof str[i - 1] === "number" && str[i] === "-")
            i++;
        else if (str[i - 1] === "-" && typeof str[i] === "number")
            i++;
        else if (typeof str[i - 1] === "number" && str[i] === " ")
            i++;
        else
            return false;
    }
    if (str.length == 10)
        return true;
    else if (str.length === 12 || str.length === 14) {
        while (i < str.length) {
            if (typeof str[i] === "number") {
                i++;
            } else
                return false;
        }
        return true;
    } else if (str.length === 13) {
        while (i < str.length) {
            if (typeof str[i] === "number" && str[8] === "-") {
                i++;
            } else
                return false;
        }
        return true;
    } else if (str.length === 16) {
        if (typeof str[10] === "number" && str[11] === "-") {
            i = 12;
        } else
            return false;
        while (i < str.length) {
            if (typeof str[i] === "number") {
                i++;
            } else
                return false;
            return true;
        }
    } else
        return false;
}

console.log(telephoneCheck("(275)76227382"));

// EXEMPLE SOLUTION

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555");