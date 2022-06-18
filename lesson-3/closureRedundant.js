function redundant(str) {
 return function redundantReturn() {
     return (str)
}
}
let f1 = redundant("apple")
console.log(f1())
let f2 = redundant("pear")
console.log(f2())
let f3 = redundant("")
console.log(f3())
