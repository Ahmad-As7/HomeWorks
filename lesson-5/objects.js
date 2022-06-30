// let school = {
//     "class-1" :[
//     {
//         id: 1,
//         name: "john"
//     }
//     ,
//     {
//         id: 2,
//         name: "nancy"
//     }
// ],
// "class-2" :[

// ],
// "class-3" :[

// ],
// };

// function f(){
// let sum = 0
// school.forEach(element => {
//     sum += element.length
//     return sum
// });
// 1st way
// for (let key in school) {
//     sum+=obj[key].length;
//    return sum;
// }
// }
// console.log(f(school))

// class car {
//   constructor(color, model, year) {
//     this.color = color
//     this.model = model
//     this.year = year
//   }
//   get Name() {
//     this.name
//   }
//   set Name(newName) {
//     this.name = newName
//   }
// }
// const car1 = new car("red", "toyota", "2013")
// console.log(car1)

// function student(name,age) {
//   return{
//     name: name,
//     age : age,
//   }
//   }
// let student1 = student("john",12);
// let student2 = student("ami",24)
// console.log(student1)
// console.log(student2)
// let getName = student.getName()
// let student2 = student("ali",12)
// console.log(getName)
// student1.name
// let {student2} = new student.setName("john", 13); 
// console.log(student1);
// console.log(student2)

// function std(nam, i){
//   let name = nam;
//   let age = i;
//   function getName(){
//       return nam
//   }
//   function setName(newName){
//       nam=newName
//   }
//   function getId(){
//       return i
//   }
//   function setId(newId){
//       i=newId
//   }
//   return {getName,setName,getId, setId}

// }
// let student2 = new std("john", 13);
// console.log()
function student(_name, _course, _age){
  let name=_name,
  course=_course,
  age=_age

  function getname(){
   return _name
}

  function setname(newName){
   _name=newName;
   return newName;
  }

  function setcourse(newcourse){
      _course=newcourse
      return newcourse
  }

 function getcourse(){
  return _course
  }

  function setage(newage){
      _age=newage
      return newage
  }

  function getage(newage){
      return _age
  }

  

  return{
   getname,
   setname,
   getcourse,
   setcourse,
   getage,
   setage
  }
  
}

let Student=new student("Muhammad", "Second",22)

let Student1=new student("Muhammad", "Thirds",22)

Student1.setcourse("Five")
Student1.setage(21)
console.log(Student1.getage())