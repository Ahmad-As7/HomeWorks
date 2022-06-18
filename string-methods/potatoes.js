// let str = "potatoes"
// let word = "potatoespotato"
// let ctn = 0
// // let splited = str.split("potato")
// // console.log(splited.length)
// for(let i = 0; i < str.length; i++){
//     if(str.includes("potato")){
//         ctn++
//     }

// }
// console.log(ctn)
// // console.log(splited)

let pt = "potatopotatpo";
let amount = 0;
for (let i = 0; i < pt.length; i++) {
  if (
    pt[i] == "p" &&
    pt[i + 1] == "o" &&
    pt[i + 2] == "t" &&
    pt[i + 3] == "a" &&
    pt[i + 4] == "t" &&
    pt[i + 5] == "o"
  ) {
    amount++;
  }
}
console.log(amount);
