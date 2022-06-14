let descending = (a,b) =>{
    let count = 0;
    for(let i=a ; b >= a ; b--){
        count++
        console.log(b)
    }
    console.log(`the count of numbers are ${count}`)
}
descending(1,5)