let n = +prompt(`give a number from 1-999`);
console.log(typeof(n))
let check = (n>999) ? alert("error it's more than 999") 
    : (n == "") ?prompt("put number")
    : (n < 0 ) ? alert("error it's less than 1")
    : (isNaN(n)) ?alert("error it's not a number")
    : (n <= 100 && n % 2 == 0) ? alert("two digit odd number")
    : (n <= 100 && n % 2 != 0) ? alert("two digit odd number")
    : (n >= 100 < 999 && n % 2 == 0) ? alert("three digit  even number")
    : (n >= 100 < 999 && n % 2 != 0) ? alert("three digit odd number")
    : alert(`you did something wrong`)
