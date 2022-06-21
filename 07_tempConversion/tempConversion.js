// fahrenheit to celsius
const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit -32) * (5/9);
    return Math.round(celsius * 10) / 10
};

//celsius to fahrenheit
const ctof = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return Math.round(fahrenheit * 10) / 10
};

console.log(ctof(60));
console.log(ftoc(32)); 

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
