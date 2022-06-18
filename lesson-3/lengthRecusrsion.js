function strLength(str) {
    if(str.length == 0){
        return null
    }
    console.log(str.length)
    return strLength(str.substring(0, str.length - 1 ))
}
console.log(strLength("apple"))
// console.log(strLength("apple"))



// let str = "apple"
// console.log(str.length)
// return str.substr(0, str.length)
