// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // we can change the title
// document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[5])
// it's not good practice to use the above mthod to manipulate the html
// console.dir(document.body)
// querryselector
// let headerTitle = document.querySelector(".header-title")
// textContent doesnt accept tags
// headerTitle.textContent = "Hello"
// headerTitle.innerHTML ='<h3>Welcome</h3>' 
// console.log(headerTitle)
// changes on header
// let header = document.querySelector("#main-header")
// header.style.borderBottom = '4px solid #ccc'
// change input button value
// var submit = document.querySelector('input[type="submit"]')
// submit.value = "send"
// styling list items
// let item = document.querySelector(".list-group-item")
// item.style.color = "red"
// let lastItem = document.querySelector(".list-group-item:nth-child(3)")
// lastItem.style.color ="purple"

// giving style to odd elements
// var odd = document.querySelectorAll("li:nth-child(odd)")
// var even = document.querySelectorAll("li:nth-child(even)")

// for(var i =0; i < odd.length ; i++){
//     odd[i].style.backgroundColor = "grey";
//     even[i].style.backgroundColor = "#D3D3D3";
// } 

// creating a new element
let newDiv = document.createElement("div")

// Add class 
newDiv.className = "hello"

// Add id 
newDiv.idname = "hello2"
console.log(newDiv)

// set attribute
newDiv.setAttribute("title", "Hello div")

// create text node
let newDivText = document.createTextNode("Hello World");

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

container.insertBefore(newDiv, h1)

console.log(newDiv)

console.log(document)



