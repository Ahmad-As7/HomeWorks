let price = (p,kg)=>{
    let count = 0
    for (let i = 0; i < kg; i++){
        console.log(i*p) ;
        count++
    }
    console.log(p*kg)
    console.log(`the count is  ${count}`)
}
console.log(price(2,10))