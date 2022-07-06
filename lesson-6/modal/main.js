let modal = document.querySelector('#myModal');
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close:nth-of-type(1)")


let myFunction = ()=> modal.style.display = "block";
btn.addEventListener('click',myFunction);
let closeModal = () => modal.style.display = "none";
span.addEventListener('click',closeModal);
// the statement below will ruin the modal display change it to one if when needed
window.onclick = (event)=> event.target == modal ? modal.style.display = "none":modal.style.display = "block"
