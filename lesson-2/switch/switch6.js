let take = +prompt(`give your number`)

let n = +prompt(`choose the one you want to change to meter: \n 1-decimeter, 2-kilometer, 3-milimeter and 4-centimeter to meter`)
switch (n) {
    case 1:prompt(take * 10)
    break
    case 2:console.log(take / 1000)
    break
    case 3:console.log(take / 10000)
    break
    case 4:console.log(take / 1000)
}