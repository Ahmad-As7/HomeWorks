// chcecks wether the value is number. and its not infinite, nor NaN.
let x = 2 / 0 //false
let y = 4 / 3  //true
let z = 0 / 0 // false

console.log(Number.isFinite(z))


// parseFloat()  parses an argument and returns floating point number.
let n = Number.parseFloat('6ysy')
console.log(n)