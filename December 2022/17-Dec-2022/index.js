// Array In Depth and For of loop
// Array Methods

// names = ["nandini", "archit", "sakshi", "udit"]
// console.log(names);
// console.log(names.length); // Length of Array
// console.log(names[3]);
// console.log(names[names.length - 1]); // to find the last index of an array

// names[4] = 'Vinay';
// console.log(names);

// let namess = new Array('Name 1', 'Names 2'); // A way to Decalre a Array // Not Recod
// console.log(namess);

// Push => Insert New Values inside the Array
// names.push('VYOM');
// console.log(names);

// Slice
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.slice(1, 6)); //

// Splice
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// array.splice(index, howmany, item1, ....., itemX)
// console.log(fruit);

// Concatenation

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [6, 7, 6, 7,7,7,7,7,7,7,7,7];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// fill
// let arr = [1, 2, 3, 4, 5, 6, 7]
// array.fill(value, start, end)
// arr.fill('nandini', 2, 5)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7]
// array.fill(value, start, end)
// arr.fill('nandini', 2, 5)
// console.log(arr)

// FIXME: Find the bug
// arr.fill('nandini', 'archit', 2, 5)
// console.log(arr)

// include
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7, 7));

//indexof
// let num = [1, 2, 3, 'Nandini', 4, 5, 6, 7, 8, 'Nandini', 'Nandini'];
// console.log(num.indexOf('Nandini'));

// isArray()
// let num = [1, 2, 3, 'Nandini', 4, 5, 6, 7, 8, 'Nandini', 'Nandini'];
// let num1 = 'Nandini';
// console.log(Array.isArray(num1));
// console.log(Array.isArray(num));

//lastIndexOf
// let num = [1, 2, 3, 'Nandini', 4, 5, 6, 7, 8, 'Nandini', 'Nandini'];
// console.log(num.lastIndexOf('Nandini'));

// Map
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt));

// Pop
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.reverse());

// Shift()
// let maths = ['Nandini', 1, 4, 9, 16, 25];
// console.log(maths.shift());

// Sort
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.reverse(names.sort()));

// unShift
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.unshift('Apple 1', 'Grapes 2');
// console.log(fruit);

// Converting to Array
// let name = 'Anurag';
// let array1 = name.split('');
// console.log(array1);

// for of
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// let Upperfruit = []; // empty Array

// for (let mayur of fruit) {
//     Upperfruit.push(mayur.toUpperCase());
// }

// console.log(Upperfruit);

// Break and Continue
// c
// Contin
// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue; // Skip, omit
//     }
//     console.log(i);
// }

// Join
// let Arr1 = [1, 2, 3, 4, 5, 6, 7];
// let var1 = Arr1.join(' 1 ');
// console.log(var1);
// console.log(typeof var1);