function factorial(N) {
    let result = 1;
    for (let i = 2; i <= N; i++) {
      result *= i;
    }
    return result;
  }
  

console.log(factorial(5)); 
console.log(factorial(4)); 
  