// History
// Basic pillars of any programming language
// Values
// Datatyes
// Premetative and non premetative Datatyes
// Print statements in JS
// Declearing Variables
// Template Literal
// Operator
// Decission / Conditionals 

// Values

// Numbers 
// 2 or 5.5 Both int and float are treated as Numbers

// string 
// Coted in single or double cotes

// Boolean --> (George Boolle --> scientist)
// True or False

// Empty Values
// NUll and Undefined

// Premetative Datatyes --> Single Value
// Numbers, string, Boolean

// Non Premetative Datatyes --> More than one Values
// arrays and object

// arrays
["nandini", 5.9, 8, true, 'lilo']
// 0        1    2   3       4   --> index
// we can have any number of types in arrays


// objects
// {
//     key: values
// }

// Variables --> placeholder for values
// let const var --> we hardely use var
// let --> can change value accordingly
// const --> value that dos not changes over peariod of time (constant)
// var --> we hardely use var

const account_number = 56987412348645;
let account_balance = 500;

// print statement
let fname = 'nandini'
let lname = 'chhajed'
const mobileNo = 864597132;

console.log(fname)
console.log(lname)
console.log(mobileNo)
console.log('my first name is ' + fname)
console.log('my last name is', lname)
console.log(mobileNo, fname, lname)

// Template Literal
console.log(`my first name is ${fname} last name is ${lname}`)

// operators

// Assignment operator
let x = 10;
let y = 5;

// Arthimatic Operator
// +, -, *. /, (% => Remainder)
let z = x + y;
console.log(x)

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// comparision operator
let xyz = 10;
let abc = '10';

// == COMPARES VALUES NOT Datatyes
// === COMPARES BOTH VALUES AND Datatyes

console.log(abc == xyz)    // True
console.log(abc === xyz)   // False
console.log(abc > xyz)
console.log(abc < xyz)
console.log(abc >= xyz)
console.log(abc <= xyz)

// Constant need to get assigned at that point only
const m = 42;

// Conditionals
let a = 10;
if (a > 10){
    console.log("a is greater than 10")
} else if (a < 10){
    console.log("a is less than 10")
} else if (a == 10) {
    console.log("a is equal to 10")
}