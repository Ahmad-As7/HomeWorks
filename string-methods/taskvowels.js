

// let vowels = (str) => {
    str = "BEGAN"
    str2 = ""
    let ctn = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i).toLowerCase() == 'o' || str.charAt(i).toLowerCase() == 'e' || str.charAt(i).toLowerCase() == 'a' || str.charAt(i).toLowerCase() == 'i' || str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "o"){
            ctn++
            str2 += str.charAt(i)            
        }
    }
    console.log(ctn) ;
    console.log(str2) ;
    // return str2;


// }
// console.log(vowels("begano"))

