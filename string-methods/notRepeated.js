let notRepeat = (str) =>{
    let str2 = ""
    for(let i =0 ; i < str.length; i++){
        if(str.charAt(i) !== str.charAt(i+1) && str.charAt(i+1) !== str.charAt(i+2) && str.charAt(i+2) !== str.charAt(i+3) && str.charAt(i+3) !== str.charAt(i+4)){
            str2 = str.slice(i, i++)

        }
    }
    return str2;

}
console.log(notRepeat("cbcbdde"))
// let str = "cbcbdde"
// let remove = str.split("")