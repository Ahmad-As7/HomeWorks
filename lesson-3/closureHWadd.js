function addN(n){
    function addToN(y){
        return y + n;
    }
    return addToN
}
let addTo5 = addN((5))
console.log(addTo5(3))
let addminus30 = addN(-30)
console.log(addminus30(80))