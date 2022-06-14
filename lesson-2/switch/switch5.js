let a = +prompt(`give me your first number`);
let b = +prompt(`give me your second number(it can't be zero)`);
let n = +prompt(`choose the operation  \n
               1 will bring the sum of two number \n
               2 will bring the deductation of two number \n
               3 will bring the multiplication of two number \n
               4 will bring the division of two number \n`);

switch(n){
    case 1: alert(a+b)
    break
    case 2: alert(a-b)
    break
    case 3: alert(a*b)
    break
    case 4: alert(a/b)
    break
}