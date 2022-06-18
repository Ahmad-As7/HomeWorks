function collatz(n, cnt = 0){
    
    if( n == 1){
     return ``
    }
    console.log(n)
    if(n % 2 != 0){
        return collatz(n * 3 + 1, cnt+=1)
    }
    
    if(n % 2 == 0){
        return collatz(n / 2, cnt+=1)
    }
}
console.log(collatz(3,cnt))