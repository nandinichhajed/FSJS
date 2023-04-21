// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let a = prompt(`which month is it: `)

if (a == 'September' ||  a == 'October' ||  a == 'November'){
    console.log("Autumn");
} else if (a == 'December' ||  a == 'January' ||  a == 'February'){
    console.log("Winter");
} else if (a == 'March' ||  a == 'April' ||  a == 'May'){
    console.log("Spring");
} else {
    console.log("not a month");
}