function firstUniqChar(s) {
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("leetcode"))

console.log(firstUniqChar("loveleetcode"))

console.log(firstUniqChar("aabb"))
