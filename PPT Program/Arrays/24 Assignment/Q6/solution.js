function topKFrequent(words, k) {
    const frequencyMap = new Map();
  
    // Build frequency map
    for (const word of words) {
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
  
    // Sort the words based on frequency and lexicographical order
    const sortedWords = [...frequencyMap.keys()].sort((a, b) => {
      const frequencyA = frequencyMap.get(a);
      const frequencyB = frequencyMap.get(b);
  
      if (frequencyA !== frequencyB) {
        return frequencyB - frequencyA; // Sort by frequency in descending order
      } else {
        return a.localeCompare(b); // If frequency is the same, sort lexicographically
      }
    });
  
    // Return the top k frequent words
    return sortedWords.slice(0, k);
  }
  
  // Example usage:
  console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
  // Output: ["i", "love"]
  console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
  // Output: ["the", "is", "sunny", "day"]
  