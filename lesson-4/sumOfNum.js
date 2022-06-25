let arr = [1,2,3,"13", "4", "645",true,4,5] // 3

const sumOfNum = arr.reduce((previousValue, currentValue) => {
    if(typeof(currentValue) === "number" && typeof(previousValue) === "number") {
        console.log(previousValue+=currentValue)
    }
})
console.log(sumOfNum)

// right way
// let sum = 0
// const summa = arr.filter((elem) =>{
//     if(typeof(elem) === "number") {
//         sum+=elem
//     }
    
// })
// console.log(sum)