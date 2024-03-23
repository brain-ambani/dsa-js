// Sum of two numbers
// Analyze: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Input: [2, 7, 11, 15], target = 9 --->>>> Output: [0, 1]
// Input: [3, 2, 4], target = 6 --->>>> Output: [1, 2]

// Solution 1: Brute Force

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const res = twoSum([2, 7, 11, 15], 9); // [0, 1]
console.log(res);
