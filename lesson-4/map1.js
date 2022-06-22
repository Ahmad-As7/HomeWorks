let arr = [0, 1, false, 2, "", 3]

const  removeFalsey = arr.filter((elem, index) =>{ if(elem !== undefined && elem !== null && elem !== 0 && elem !== false){
    return elem}
}) 
console.log(removeFalsey)