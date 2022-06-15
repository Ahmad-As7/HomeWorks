let str = "potatoes"
let word = "potato"
let ctn = 0
let splited = str.split("potato")
console.log(splited.length)
for(let i = 0; i < str.length; i++){
    if(str.includes(word)){
        ctn++
    }
    
}
console.log(ctn)
console.log(splited)

 