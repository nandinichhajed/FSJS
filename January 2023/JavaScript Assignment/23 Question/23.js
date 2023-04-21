//  23. Write a program to check that the number given by the user is a prime number or not. 
let num = prompt('enter a number: ')
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime()); 
