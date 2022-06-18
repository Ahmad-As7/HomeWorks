let str = "world"
let str2 = ""
    for(let i = str.length - 1 ; i >= 0; i--){
        str2 += str[i]
   }
console.log(str2)

// second way
// split splits every word of string and puts it in an array then reverse method
// is an array methods which reverses and join method joins all array elements in an string
// console.log(str.split("").reverse().join(""))
