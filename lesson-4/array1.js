// task-1 show first element
let arr = ['js','css','html']
console.log(arr[0])
// task-2 show second element
console.log(arr[2])
// task-3
let arrr2 = [1,2,3,4,5]
let spliced = arrr2.splice(1,3)
console.log(spliced)

// task-4
let arr3 = [1,2,3,4,5]
let changedarr3 = arr3.splice(3,0,'a','b','c')
console.log(arr3)

// task-5
let arr4 = [1,2,3,4,5]
let sliced = arr4.slice(0,3)
console.log(sliced)

// task-6
let arr5 = [1,2,3,4,5]
let sliced2 = arr5.slice(3,5)
console.log(sliced2)

// task-7   
let arr6 = ["cabbage", "turnip", "radish", "carrot"]
let joined = arr6.join(",")
console.log(joined)
