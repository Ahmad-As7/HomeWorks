function collatz(n){
    let steps = 0
    
    if( n == 1){
        steps++
     return `${steps} steps`
    }
    console.log(n)
    if(n % 2 != 0){
        steps++
        return collatz(n * 3 + 1)
    }
    console.log(`n ${steps}`)
    
    if(n % 2 == 0){
        steps++

        return collatz(n / 2)
    }
    return steps;
}
console.log(collatz(3))