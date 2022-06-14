let kg = +prompt(`how many killogram`)
let price = (kg,p)=>{
    for(let i = 11; i <= p ; i++){
        if(i%2==0){
            console.log(`${i / 10} kg = ${kg * (i/10) } somoni`)
        }
    }
}
console.log(price(kg,20))
