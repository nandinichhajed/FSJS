function nthUglyNumber(n) {
    const uglyNumbers = [1];
    let i2 = 0, i3 = 0, i5 = 0;
  
    while (uglyNumbers.length < n) {
      const nextMultipleOf2 = uglyNumbers[i2] * 2;
      const nextMultipleOf3 = uglyNumbers[i3] * 3;
      const nextMultipleOf5 = uglyNumbers[i5] * 5;
  
      const nextUglyNumber = Math.min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
      uglyNumbers.push(nextUglyNumber);
  
      if (nextUglyNumber === nextMultipleOf2) {
        i2++;
      }
      if (nextUglyNumber === nextMultipleOf3) {
        i3++;
      }
      if (nextUglyNumber === nextMultipleOf5) {
        i5++;
      }
    }
  
    return uglyNumbers[n - 1];
  }
  
  // Example usage:
console.log(nthUglyNumber(10)); // Output: 12
console.log(nthUglyNumber(1)); // Output: 1
  