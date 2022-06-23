let arr = [1,2,"13", "4", "645",true] // 3

const sumOfNum = arr.reduce((previousValue, currentValue) => {
    if(typeof(currentValue) === "number" && typeof(previousValue) === "number") {
        console.log(previousValue+currentValue)
    }

})
console.log(sumOfNum)