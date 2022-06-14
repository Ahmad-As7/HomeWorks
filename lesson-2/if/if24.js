let x = prompt(`give a number`);
if(x > 0){
    console.log(2 * Math.sin(x));
}else if(x <= 0){
    console.log(6 - x);
}