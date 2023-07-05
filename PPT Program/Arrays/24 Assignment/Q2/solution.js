function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
      if (charMap[currentChar] >= start) {
        start = charMap[currentChar] + 1;
      }
      charMap[currentChar] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
 
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3  