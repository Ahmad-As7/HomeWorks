function isvowel(v){
    v = v.toUpperCase()
    return (v == "A" || v == "I" || v == "O" || v == "E" || v == "U")
}
function countVowels(string, len){
    if(len = 1){
        return isvowel(string[len - 1])
    }
    return countVowels(string, len-1) + isvowel(string[len - 1])
}
console.log(countVowels("hello", "hello".length));