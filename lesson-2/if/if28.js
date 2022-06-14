let year = +prompt(`give a year I'll tell if it has a 365 day or 366`);
if(year % 4 == 0  && year % 400 == 0){
    alert(`it has 366 days`)
}else {
    alert(`it has 365 days`)
}