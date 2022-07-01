// let script = document.getElementsByTagName("script")
let table = document.createElement('table');
// table.insertBefore("script","table")
document.body.appendChild(table);
// table.style.border = "1px solid black";
let thead = document.createElement('thead');
table.appendChild(thead);
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');
thead.append(th1,th2,th3,th4);
let tr1 = document.createElement('tr')
let tr2 = document.createElement('tr')
let tr3 = document.createElement('tr')
let tr4 = document.createElement('tr')
tr1.classList.add("tr")
table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
table.appendChild(tr4);


// let addClass = th1.classList.add("th")
// let th = document.querySelectorAll("th")
// let th = document.getElementsByTagName("th")
// th1.style.padding = "10px"
// th1.style.border = "1px solid black"