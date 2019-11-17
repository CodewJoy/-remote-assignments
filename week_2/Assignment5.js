// Assignment 5: Algorithm Practice (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9); // [0, 1]