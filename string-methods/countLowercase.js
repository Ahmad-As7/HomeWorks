let str = "UcSUNFYGAaFYFYGtNUH"
let lowerCases = ""
let ctn = 0
let findLowerCase = (str) =>{
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase()) {
            lowerCases += str[i]
            ctn++
        }
    }
    return lowerCases
}

console.log(ctn)
console.log(findLowerCase(str) )
console.log(findLowerCase("bEEFGBuFBRrHgUHlNFYaYr") )

