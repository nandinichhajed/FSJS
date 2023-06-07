function swap(str, i, j) {
    let temp;
    const charArray = str.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  }
  
  function permute(str, l, r, result) {
    if (l === r) {
      result.push(str);
    } else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permute(str, l + 1, r, result);
        str = swap(str, l, i); // backtrack
      }
    }
  }
  
  function allPermutations(S) {
    const result = [];
    permute(S, 0, S.length - 1, result);
    return result;
  }
  

console.log(allPermutations("ABC"));
console.log(allPermutations("XY")); 
  