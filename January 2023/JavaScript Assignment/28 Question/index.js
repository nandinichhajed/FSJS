// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// const n = 3;

// for (let i = 1; i <= n; i++) {
//   let row = '';

//   for (let j = 1; j <= i; j++) {
//     row += '*';
//   }

//   console.log(row);
// }
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// const n = 3;

// for (let i = 1; i < n; i++) {
//   let row = '*';

//   for (let j = 1; j < n; j++) {
//     row += '*';
//   }

//   console.log(row);
// }

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

const n = 3;

for (let i = 1; i <= n; i++) {
  let row = '';

  // Add spaces before the stars
  for (let j = 1; j <= n - i; j++) {
    row += ' ';
  }

  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += '*';
  }

  console.log(row);
}