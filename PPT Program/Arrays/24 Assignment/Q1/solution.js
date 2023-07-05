function romanToInt(s) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const current = romanNumerals[s[i]];
      if (current >= prevValue) {
        result += current;
      } else {
        result -= current;
      }
      prevValue = current;
    }
  
    return result;
  }
  
  // Example usage:
  console.log(romanToInt("III")); // Output: 3
  console.log(romanToInt("LVIII")); // Output: 58
  