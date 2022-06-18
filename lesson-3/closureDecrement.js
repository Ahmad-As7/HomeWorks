function counter(n){
    insideCounter = 0;
    function decrementCounter(){
        return insideCounter = n--
    }
    return decrementCounter
}
let decrement = counter(2)
console.log(decrement())
console.log(decrement())
