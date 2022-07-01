//  check if a number has an even number and an odd number it passes the test
// else if it has two even or two odds it is false. 
 let evenOrOdd = (n)=> {
    let str = n.toString();
    if(str[1] % 2 === 0 || str[0] % 2 ===0){
        return true
    }else{
        return false
    }
}

console.log(evenOrOdd(32)) 