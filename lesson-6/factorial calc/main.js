let num = document.querySelector(".num")
let btn = document.querySelector(".btn")
res = document.createElement("div")
document.body.appendChild(res)


btn.onclick = () =>{
    result = 1
    for (let i = 1; i <= num.value;i++) {
        result = result * i
    }
     res.innerHTML = result
}


// let factorial = function(n){
//         if(n==0){
//              return 1
//             }
//       return  n   * factorial(n-1)
//     }
//     res.innerHTML = factorial