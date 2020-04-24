/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Array of nums -> Num
    Given array of nums, modify array in place, removing duplicates. Return length of modified array.Cannot create another intermediate array. Need O(1) space complexity
    Variable to remember original length
    Variable to track current number (since its sorted)
    Iterate through array backwards and remove
        curNum === prevNum ? splice currentNum
        CurNum !== prevNum ? prevNum = curNum
    return arr.length
    
*/
// var removeDuplicates = function(nums) { 
//     let originalLength = nums.length; 
//     let prevNum = null;
//     for(let i = originalLength - 1; i >= 0; i-- ) {
//         if (nums[i] === prevNum) {
//             nums.splice(i,1);
//         } else {
//             prevNum = nums[i];
//         }
//     }
//     return nums.length;
// };

/*
    Second pass. Read problem statement better. Only care about the modified array within the end length. Dont need to delete others.
*/
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
}