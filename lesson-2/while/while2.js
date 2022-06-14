let a = +prompt(`number a:`)
let b = +prompt(`number b:`)

let func = (a,b) =>{
    let ctn = 0;
    while(b <= a){
        if(b == a){
            break
        }
        ctn++
        console.log(b)
        b++


    }
    console.log(`the counter is ${ctn}`)
    // console.log(b)
}
console.log(func(a,b))