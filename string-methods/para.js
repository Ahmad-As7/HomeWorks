let str = "aababcbbcd"
let ctn1 = 0
let ctn2 = 0
let ctn3 = 0


for (let i = 0; i < str.length; i++){
    if(str[i] < str[i+1]){
        ctn1++;
    }
}
console.log(ctn1)















// for (let i = 0; i < str.length; i++){
//     if(str.charAt(i) == "a" && str.charAt(i+1) !== "a" ){
//      ctn1++   
//     }
// }
// console.log(ctn1)
// for (let i = 0; i < str.length; i++){
//     if(str.charAt(i) == "a" && str.charAt(i+1) !== "a" ){
//      ctn1++   
//     }
// }
// console.log(ctn1)
