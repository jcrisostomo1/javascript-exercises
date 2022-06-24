const palindromes = function (str) {
    const regex = /[^A-Za-z0-9]/g;
    let trimmedStr = str.toLowerCase().replace(regex, "");
    console.log(trimmedStr)
    let copy = trimmedStr;
    if (trimmedStr === copy.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
