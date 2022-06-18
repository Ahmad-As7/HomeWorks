function reverseStr(str){
    let str1 = ""
    if(str.length == 1){
        return str
    }
        str1+=str[str.length-1]
        return reverseStr+=(str + str.length - 1)

}
console.log(reverseStr("hello"))  






// return str[str.length -1] + reverseStr(str.slice(0,-1))
