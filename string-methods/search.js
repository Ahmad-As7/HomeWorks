let str = prompt("wwrite a text")
let findElem = prompt("which word")

let ctnb = 0
let ctnc = 0
for(let i = 0;i < str.length; i++){
    
            if(str.charAt(i) == "b"){
                ctnb++
            }
            if(str.charAt(i) == "c"){
                ctnc++
            }
    }



console.log(`it has  ${ctnb}  b`)
console.log( `  it has ${ctnc} c `)
// 