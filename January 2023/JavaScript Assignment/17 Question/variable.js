// 17. Write a program which tells the number of days in a month.

let a = prompt(`Enter Month Name: `)

if (a == 'October' || a == 'December' ||  a == 'January'  || a == 'March'  ||  a == 'June' ||  a == 'August'){
    console.log("31 days");
} else if (a == 'April' ||  a == 'May' ||  a == 'July' || a == 'September' ||  a == 'November') {
    console.log("30 days");  
} else if (a == 'February') {
    console.log("28 days");
} else {
    console.log("not a month");
}