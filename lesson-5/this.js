// method -> object

// const game = {
//     title: 'game',
//     play() {
//         console.log(this)
//     }
// };
// game.play() // this shows all of game object inside

// now we can add new method to our game object

// game.pause = function(){
//     console.log(this)
// }
// game.pause()

// // 2nd
// const jack = {
//     face: '🤯',
//     whoIsThis: function(){
//         console.log(this)
//     },
//     butWho: () => {
//         console.log(this)   // arrow functions gets the global object (window)
//     }

// }
// jack.whoIsThis()

// claswork
// function addName(obj,key,value){

//     obj[key]=value
//     return obj
// }
// console.log(addName({piano: 500},"brutus",300))

// use only two parameters
// let f = 
//   [
//     {
//       "Generation":-3,
//       "Male": "great grandfather",
//       "Female": "great grandmother",
//   },
//   ];

//   function generation(x, y) {
//     let t = f.find((obj)=>{
//       return obj.Generation === x;
//     });


//     switch(y){
//       case 'm': console.log(t.Male);
//       break;
//       case 'f': console.log(t.Female);
//       break;
//       default: console.log("wrong input");
//       break;
//     }
 
// }
// console.log(generation(-3,"m"))


// 
// function generation(x,y) {
// const generations = {
//   '-3':{
//       m:'great grandfather',
//       f:'great grandmother',
//   },
//   '-2':{
//       m:'grandfather',
//       f:'grandmother',
//   },
//   '-1':{
//       m:'father',
//       f:'mother',
//   },
//   '0':{
//       m:'me!',
//       f:'me!',
//   },
//   '1':{
//       m:'son',
//       f:'daughter',
//   },
//   '2':{
//       m:'grandson',
//       f:'granddaughter',
//   },
//   '3':{
//       m:'great grandson',
//       f:'great granddaughter',
//   }
// }
// return generations[x+''][y]

// }
// console.log(generation("1","1"))

function generation(x,y){

    let obj = {
        "-3":{"m":"great grandfather","f":"great grandmother"},
        "-2":{"m":"grandfather","f":"grandmother"},
        "-1":{"m":"father","f":"mother"},
        "0":{"m":"me!","f":"me!"},
        "1":{"m":"son","f":"daughter"},
        "1":{"m":"grandson","f":"granddaughter"},
        "1":{"m":"great grandson","f":"great granddaughter"},

    };

    return obj[x][y]
}
console.log(generation("-2","f"))


// obj{y}=arr[1]

// return obj[num]=value;

// console.log(generation(1, "m"));
