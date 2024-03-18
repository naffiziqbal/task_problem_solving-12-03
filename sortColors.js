/* Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 */

const sortColor = (nums) => {
  let i = 0,
    min = 0;
  let max = nums.length - 1;

  while (i <= max) {
    if (nums[i] === 0) {
      //? Swap current element (0) with the element at the low index
      [nums[i], nums[min]] = [nums[min], nums[i]];
      min++;
      i++;
    } else if (nums[i] === 1) i++;
    else {
      [nums[i], nums[max]] = [nums[max], nums[i]];
      max--;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
const execute = sortColor(nums);

console.log(nums)
