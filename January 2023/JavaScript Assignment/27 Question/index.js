// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Loop to print prime numbers between 0 and 100 (inclusive)
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }