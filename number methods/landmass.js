let country = prompt(`give a country's name I'll tel you its land in km and percentge of its mass`)
let countryMass = Number(prompt(`give a give it's area`))
let worldMass = 148940000;
let countryarea = console.log(`${country}'s mass percent is ${(countryMass / worldMass * 100).toFixed(2)} of the world mass(${worldMass} km2) `)



// other ways 
// if(country=="russia" || country=="Russia"){
//     alert(`Russia's mass is 17098242 km and it is ${russia}%  of the world mass`)
// }
// console.log(russia)
// switch(country) {
//     case "russia":
//     case "Russia":
//     alert(`Russia's mass is 17098242 km2 and it is ${russia}%  of the world mass`)
    
// }