let x = 9 // false
let y = "d"
console.log(isNaN(y))

function sanitize(x){
    if(isNaN(x)){
        return Number.isNaN;
    }
    return x
}
console.log(sanitize("7a"))