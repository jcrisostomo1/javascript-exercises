const removeFromArray = function(arr, ...removeFromArray) {
    console.log(removeFromArray)
    return arr.filter(item => !removeFromArray.includes(item));
};

let sampleArr = [0,1,2,3,4,5];
console.log(removeFromArray(sampleArr, 3,2));

// Do not edit below this line
module.exports = removeFromArray;
