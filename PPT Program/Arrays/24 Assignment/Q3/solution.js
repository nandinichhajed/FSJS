function majorityElement(nums) {
  let count = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
