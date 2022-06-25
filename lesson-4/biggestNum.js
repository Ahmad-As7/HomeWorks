let arr = [10, 40, 30, 20, 50,2,3,4,];
let biggest = Math.max(...arr)
let indexOfbiggest = arr.indexOf(biggest);
let spliceFirstbiggest = arr.splice(indexOfbiggest,1)
let secondBiggestNum = Math.max(...arr)
console.log(secondBiggestNum)

// second way of calculating
// let arr = [10, 40, 30, 20, 50,2,3,4,];
// let biggest = Math.max.apply(null,arr)
// let indexOfbiggest = arr.indexOf(biggest);
// let spliceFirstbiggest = arr.splice(indexOfbiggest,1)
// let secondBiggestNum = Math.max.apply(null,arr)
// console.log(secondBiggestNum)







// 2nd works only for first biggest
// const getMax = (a,b) => Math.max(a,b);
// let findmax = arr.reduce(getMax)
// console.log(findmax)