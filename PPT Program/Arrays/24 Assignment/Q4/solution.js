function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');

    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(strs[i]);
    } else {
      anagramMap.set(sortedStr, [strs[i]]);
    }
  }

  return Array.from(anagramMap.values());
}

// Example usage:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""]));
// Output: [[""]]
console.log(groupAnagrams(["a"]));
// Output: [["a"]]
