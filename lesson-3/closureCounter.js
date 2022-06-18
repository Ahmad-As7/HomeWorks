function counter(n){
    let insideCounter = 0;
   function counterPlus(){
    return insideCounter = n++
    }
    return counterPlus
    

}
let increment = counter(2)
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())


