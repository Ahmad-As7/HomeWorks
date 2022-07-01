let div = document.createElement('div');
div.style.display = 'flex';
div.style.flexDirection = 'row'
div.style.justifyContent = "center"
div.style.alignItems = 'center'
div.style.justifyContent = "space-evenly"
div.style.backgroundColor = "#D3D3D3"
div.style.height = "550px"
// div.style.justifyContent = 'center';
document.body.appendChild(div);
let card1 = document.createElement('div');
let img = document.createElement('img');
img.src = 'download.jpeg'
card1.appendChild(img)
card1.classList.add("card1")
div.appendChild(card1);
let style1 = document.querySelector(".card1");
style1.style.background = "white";
style1.style.width = "225px"
style1.style.height = "355px"
style1.style.border = ".01px solid grey"
let p = document.createElement('p')
p.style.paddingLeft = "10px";
p.innerHTML = `  <h4>John Doe</h4> <br> <p>Architect & Engineer</p>`
card1.appendChild(p)
// card2
let card2 = document.createElement('div');
let img2 = document.createElement('img');
img2.src = 'jane.png'
img2.style.width = "225px"
card2.appendChild(img2)
card2.classList.add("card2")
div.appendChild(card2);
let style2 = document.querySelector(".card2");
style2.style.position = "relative";
style2.style.background = "white";
style2.style.width = "225px"
style2.style.height = "355px"
style2.style.border = ".01px solid grey"
style2.style.zIndex = "10";
style2.style.borderRadius = "3px"

let p1 = document.createElement('p')
p1.style.paddingLeft = "10px";
p1.innerHTML = `  <h4>Jane Doe</h4> <br> <p>Enterior Designer</p>`
card2.appendChild(p1)


