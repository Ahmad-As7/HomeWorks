let arr = [0, 1, false, 2, "", 3,undefined,NaN,null,true]

const  removeFalsey = arr.filter((elem) =>{ if(elem !== undefined && elem !== null && elem !== 0 && elem !== false  ){
    return elem}
}) 
console.log(removeFalsey)



// arr.filter(function removeFalsey(elem){return elem})