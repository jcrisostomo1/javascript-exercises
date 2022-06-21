const removeFromArray = (arr, ...removeFromArray) => {
    console.log(removeFromArray)
    return arr.filter(item => !removeFromArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
