// MY OWN CODE

function palindrome(str) {

    let arr = [];
    str = str.toLowerCase();
    str = str.replace(/\W|_|/gi, "");
    arr = str.split("");
    let i = 0;

    while (i < arr.length) {
        if (arr[i] !== arr[arr.length - i - 1])
            return false;
        else
            i++;
    }
    return true;
}

console.log(palindrome("_eye"));

// EXEMPLE SOLUTION

function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===
        str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}