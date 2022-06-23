// let arr = [1, 1]
// let cloned = [...arr,[...arr]]
// console.log(cloned)
function addClone(arr){
    let cloned =[...arr,[...arr]]
    return cloned
}
console.log(addClone(["a","s",1]))