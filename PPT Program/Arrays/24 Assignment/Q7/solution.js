function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];
  
    for (let i = 0; i < nums.length; i++) {
      // Remove elements from the deque that are outside the current window
      while (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }
  
      // Remove elements from the deque that are smaller than the current element
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      // Add the current element's index to the deque
      deque.push(i);
  
      // Add the maximum element in the current window to the result
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
  console.log(maxSlidingWindow([1], 1)); // Output: [1]
  