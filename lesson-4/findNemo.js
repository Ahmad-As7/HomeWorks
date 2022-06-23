//  findNemo(`I am finding Nemo!`) -> "I found Nemo at 4"

let str = "I am finding Nemo !"
function findNemo1(str){
    let strToArr = str.split(" ")
    let indexOfNemo = strToArr.indexOf("Nemo")
    console.log(`I found Nemo at index ${indexOfNemo}`)
}
console.log(findNemo1(str))





// console.log(a)
// function findNemo1(arr){
//     if(findNemo){
//         console.log(`I found nemo at ${a}`)
//     }
//     else{
//         co
//     }

// }


// const findNemo1 = strToArr.find((elem,index) => {
//     if(elem.toLowerCase() == "nemo"){
//         console.log(`i found nemo! at index ${index}`)
//     }
//     else if(elem.toLowerCase() !== "nemo"){
//        console.log("i didint found") 
//     }
// })
// console.log(findNemo1)
