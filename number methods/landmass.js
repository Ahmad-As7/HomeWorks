let country = prompt(`give a country's name I'll tel you its land in km and percentge of its mass`)
let worldMass = 148940000;
let russia = (17098242 / worldMass * 100).toFixed(2) 
// if(country=="russia" || country=="Russia"){
//     alert(`Russia's mass is 17098242 km and it is ${russia}%  of the world mass`)
// }
// console.log(russia)
switch(country) {
    case "russia":
    case "Russia":
    alert(`Russia's mass is 17098242 km2 and it is ${russia}%  of the world mass`)
    
}