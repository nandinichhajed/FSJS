function findMax(arr, index) {
    if (index === arr.length - 1) {
      return arr[index];
    }
    
    const maxFromRest = findMax(arr, index + 1);
    
    if (arr[index] > maxFromRest) {
      return arr[index];
    } else {
      return maxFromRest;
    }
  }
  
  // Example usage:
  const arr1 = [1, 4, 3, -5, -4, 8, 6];
  console.log(findMax(arr1, 0)); // Output: 8
  
  const arr2 = [1, 4, 45, 6, 10, -8];
  console.log(findMax(arr2, 0)); // Output: 45
  