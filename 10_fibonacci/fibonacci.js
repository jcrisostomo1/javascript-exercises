const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[num]

};

// Do not edit below this line
module.exports = fibonacci;
