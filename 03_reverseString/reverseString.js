const reverseString = (str) => {
    let reversed = [];
    let array = str.split("");

    for(let i = array.length-1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
