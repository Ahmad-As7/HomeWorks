// function addUp(add, x){
//     if(x == 0){
//         return add
//     }
//     addUp(add+x)
//     return addUp - 1
// }
// console.log(addUp(2,2))

// right way to do
// function add(x){
//     function newAdd(y){
//         return x + y;
//     }
//     return newAdd
// }
// let add2 = add(2);
// console.log(add2(3))


function addToEnd(suffix){
    function addLy(word){
        return word+suffix
    }
    return addLy
}
let add_ly = addToEnd("ly")
console.log(add_ly("hopeless"))