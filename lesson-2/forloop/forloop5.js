let price = (p,kg)=>{
    let count = 0;
    for(let i = 1;i <= 10; i++){
        count++;
        console.log(`${i / 10} kg= ${(p * (i/10))}` );
        
    }
    console.log(count);
}
console.log(price(0.2,1))