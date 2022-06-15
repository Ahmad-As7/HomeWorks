let a = "aABaBCAbC";
let str =  ""
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let ctn = 0
for(let i = 0; i < str.length; i++){
    if(a[i].includes(uppercase[i])){
        ctn++
        str += a(i)
    }

}
console.log(ctn)
console.log(str)



// right way
for(let i = 0; i < a.length; i++){
    if(a[i] == a[i].toUpperCase()){
        ctn++
    }
}
console.log(ctn)