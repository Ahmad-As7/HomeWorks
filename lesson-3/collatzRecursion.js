let cnt = 0;
function collatz(n){
    cnt += 1
    console.log(n)

    if( n == 1){
     return 1
    }
    if(n % 2 != 0){
        return collatz(n * 3 + 1)
    }
    
    if(n % 2 == 0){
        return collatz(n / 2)
    }
}
console.log(collatz(3))