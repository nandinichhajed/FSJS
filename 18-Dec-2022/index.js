// Stage One of JS will Be completed Today!

// Work so far
// Datatypes => number, string, boolean, Null and undefined.
// Array and Object

// OPerators
// Condtions
// If, If else, Switch and Ternary Cond
// Loops => do while, while loop and For Loop
// Math and Date
// Array and method => Assignment to write article
// for of  => Array and for in => Object

// Topic: Function

// <----------------------- Normal function ----------------------->
// function sum(){  // function defination
//     let num1 = 10;
//     let num2 = 20;

//     console.log("The sum of two numbers is:", num1 + num2)
// }
// sum(); // calling of function


// <----------------------- function with arguments -----------------------> 
// function add(val1, val2) {
//     console.log("The sum is:", val1 + val2)
// }
// add(45, 45)


// <----------------------- function with returntype ----------------------->
// function addition(v1, v2){
//     let sum = v1 + v2;
//     return sum;
// }
// add = addition(25, 10)
// console.log(add)


// <----------------------- string - function taking multiple arguments  ----------------------->
// function website(url, domain){
//     let con = "https://";
//     let result = con + url + domain;
//     return result;
// }
// let url = website('nandinichhajed', '.com')
// console.log(url)


// <----------------------- passing multiple arguments in array ----------------------->
// function sum(arr){
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let summary = [1,2,3,4,5,6,7,8,9,10]
// let arrayresult = sum(summary);
// console.log(arrayresult)

// <---- using for of method ---->

// let summary = [1,2,3,4,5,6,7,8,9,10]
// function sum(summary){
//     let i = 0;
//     for(let x of summary){   // In JS For of loop, x is your actual value of the array
//         i = i + x;
//     }
//     return i;
// }
// let arrayresult = sum(summary);
// console.log(arrayresult)


// <----------------------- passing multiple arguments while calling function ----------------------->
// function nandini(){
// // by default thr function wiill create memory for arguments
//     sum = 0;
//     for(i = 0; i < arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// a = nandini(1, 5 , 7, 9, 8, 10)
// console.log(a)


// <---- using for of method ---->
// function nandini(){
//     sum = 0;
//     for(let x of arguments){
//         sum = sum + x;
//     }
//     return sum;
// }
// a = nandini(1, 5 , 7, 9, 8, 10)
// console.log(a)


// <----------------------- arrow function ----------------------->
// let lilo = () => {
//     console.log("lilo is cute")
// }
// lilo();

// <---- passing arguments in arrow function ---->
// let lilo = (a1, a2) => {
//     console.log("lilo is cute", a1, a2)
// }
// lilo("and", "great");


// <----------------------- objects ----------------------->
// let username = {
//     fname: 'nandini',
//     lname: 'chhajed',
//     username: 'nandinichhajed',
//     role: 'admin',
//     login_count: 25
// }

// console.log(username.fname)
// console.log(username['fname'])

// console.log(username.login_count)

// username.login_count = 65
// console.log(username.login_count)

// for (let x in username){
//     console.log(username[x])
// }