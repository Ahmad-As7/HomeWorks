let div1 = document.querySelector(".main");
div1.style.display = "flex";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";
div1.style.marginTop = "20%"
// div1.style.justifyContent = ""
let btn1 = document.querySelector(".btn1")
btn1.classList.add("btn-green")
let btn2 = document.querySelector(".btn2")
btn2.classList.add("btn-red")
let span = document.querySelector("span")
// span.style.textAlign = "center";
let brandBtn= document.querySelector(".btn-green")
brandBtn.style.backgroundColor = "green"
brandBtn.style.padding = "10px 25px"
brandBtn.style.borderRadius = "7%"
let brandBtn2= document.querySelector(".btn-red")
brandBtn2.style.backgroundColor = "red"
brandBtn2.style.padding = "10px 25px"
brandBtn2.style.borderRadius = "7%"
let resetBtn = document.querySelector(".resetBtn")
resetBtn.style.backgroundColor = "black"
resetBtn.style.color = "white"
resetBtn.style.padding = "10px"
resetBtn.style.borderRadius = "7%"





let counter = 0
span.style.color = "black"
span.style.padding = "10px"
btn1.onclick = () =>{
    if(counter>=0){
    span.style.color = "blue"
    }
    counter++;
    span.innerHTML = counter
}
btn2.onclick = () =>{
    
    if(counter <= .5){
        span.style.color = "red"
    }
    counter--;
    span.innerHTML = counter
}
resetBtn.onclick = () => {
    span.style.color = "black"
    counter = 0
    span.innerHTML = 0
}
