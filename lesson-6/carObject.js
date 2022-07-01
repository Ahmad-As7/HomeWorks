function prequal(car) {
    if (car.mileage > 100000) {
    return false;
    } else if (car.year < 1960) {
    return false;
    }
    return true;
   }
   let volkswagen = {
    made: "pilot",
    year: 2000,
    mileage:19000,
   }
   let worthAlook = prequal(volkswagen)
   if(worthAlook){
    console.log(`you should take look at this model: ${volkswagen.made} it looks like what you looking for`)
   }else{
    console.log(`you should not  take look at this model: ${volkswagen.made}`)
   }