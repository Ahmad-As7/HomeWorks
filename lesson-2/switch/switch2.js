let testResult = +prompt(`what is your test result?`)
switch (testResult) {
    default : +prompt(`last chance => what is your test result?`)
    case (1): alert( "its bad")
    break;
    case (2): alert( "its not good")
    break;
    case (3): alert( "its not bad")
    break;
    case (4): alert( "its good")
    break;
    case (5): alert( "its great")
    break;
    
}