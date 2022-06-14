let months = +prompt(`in which month is your birthday`)
let month1 = "january"
switch(months) {
    default  : +prompt(`last chance enter your birth month`)
    case (" ") :alert("error") 
    break
    case (1): alert( "first month january");
    break;
    case (2): alert( "second month february")
    break
    case (3): alert( "third month march")
    break
    case (4): alert( "fourth month april")
    break
    case (5): alert( "fifth month may")
    break
    case (6): alert( "sixth month june")
    break
    case (7): alert( "seventh month july")
    break
    case (8): alert( "eight month august")
    break
    case (9): alert( "ninth month september")
    break
    case (10): alert( "tenth month october")
    break
    case (11): alert( "eleventh month november")
    break
    case (12): alert( "twelvth month december")
}