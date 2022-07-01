// let script = document.getElementsByTagName("script")
let table = document.createElement('table');
// table.insertBefore("script","table")
document.body.appendChild(table);
// table.style.border = "1px solid black";
let thead = document.createElement('thead');
thead.classList.add("thead");
table.appendChild(thead);
let th1 = document.createElement('th');
th1.innerHTML = "Rank"
let th2 = document.createElement('th');
th2.innerHTML = "Name"
let th3 = document.createElement('th');
th3.innerHTML = "Points"
let th4 = document.createElement('th');
th4.innerHTML = "Team"
thead.append(th1,th2,th3,th4);
let tr1 = document.createElement('tr')
let td1 = tr1.insertCell(0)
let td2 = tr1.insertCell(1)
let td3 = tr1.insertCell(2)
let td4 = tr1.insertCell(3)
td1.innerHTML = "1"
td2.innerHTML = "dcode"
td3.innerHTML = "Domenic"
td4.innerHTML = "88,110"
let tr2 = document.createElement('tr')
let tr2td1 = tr2.insertCell(0)
let tr2td2 = tr2.insertCell(1)
let tr2td3 = tr2.insertCell(2)
let tr2td4 = tr2.insertCell(3)
tr2td1.innerHTML = "2"
tr2td2.innerHTML = "Sally"
tr2td3.innerHTML = "72,400"
tr2td4.innerHTML = "Students"

let tr3 = document.createElement('tr')
let tr3td1 = tr3.insertCell(0)
let tr3td2 = tr3.insertCell(1)
let tr3td3 = tr3.insertCell(2)
let tr3td4 = tr3.insertCell(3)
tr3td1.innerHTML = "3"
tr3td2.innerHTML = "Nick"
tr3td3.innerHTML = "52,300"
tr3td4.innerHTML = "dcode"


let tr4 = document.createElement('tr')
tr1.classList.add("tr")
tr2.classList.add("tr")
tr3.classList.add("tr")
tr4.classList.add("tr")
// let trClass = document.querySelector(".tr") //querySelector is not working
// tr1.style.color = "red"
// trClass.style.background = "black" 
// tr1.style.padding = "15px"
// tr1.style.background = "black"
// tr2.style.padding = "15px"
// tr2.style.background = "black"
// tr3.style.padding = "15px"
// tr3.style.background = "black"
// tr3.style.padding = "15px"
// tr3s.style.background = "black"

table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
table.appendChild(tr4);


// let addClass = th1.classList.add("th")
// let th = document.querySelectorAll("th")
// let th = document.getElementsByTagName("th")
// th1.style.padding = "10px"
// th1.style.border = "1px solid black"