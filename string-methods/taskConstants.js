// let constants = (str) =>{
//     let str1 = ""

//     for(let i = 0; i < str.length;i++){
//         if(str.charAt(i).toLowerCase() != 'o' || str.charAt(i).toLowerCase() != 'e'
//          || str.charAt(i).toLowerCase() != 'a' || str.charAt(i).toLowerCase() != 'i' 
//          || str.charAt(i).toLowerCase() != "y" || str.charAt(i).toLowerCase() != "u"){
//             str1 += str.charAt(i)      
//             console.log(str.charAt(i).toLowerCase()!== "o")      
//         }

//     }
//     return str1
// }
// console.log(constants("moscow"))



let strr = "moscow"
let vowels = "aieoyu"
let str2 = ""
for(let i =0;i < strr.length; i++){
    if(!vowels.includes(strr[i])){
        str2 += strr[i]
    }
}
console.log(str2)