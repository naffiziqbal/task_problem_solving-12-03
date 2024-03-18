/* PW2.01.018
Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

const majorityElements = (nums) => {
  let count = 0,
    leader;
  for (let i = 0; i < nums.length; i++) {
    if (count < 1) leader = nums[i];
    if (nums[i] == leader) count++;
    else count--;
  }
  return leader;
};

const arr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 43, 4, 4, 5, 5, 6, 3, 3, 3, 3, 3, 3];

const execute = majorityElements(arr);
console.log(execute);
