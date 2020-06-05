const assert = require('assert').strict;

/*
  Learning Points:
    1st try: used frequency counter. Worked fine, linear, but two pass
    2nd try: linear, one pass, with three pointer
      1st pointer tracks just right of sorted 0s at beginning
      3rd pointer tracks just left of sorted 2s at end
      2nd/mid/index pointer tracks main value we're checking each iteration
        If 0, swap with 1st pointer, if 2, swap with third, move pointers appropriately 
*/

function sortColors(arr) {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      //swap left and mid
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      //increment left and mid
      left++;
      mid++;
    } else if (arr[mid] === 2) {
      //swap right and mid
      [arr[right], arr[mid]] = [arr[mid], arr[right]];
      //decrement right
      right--;
    } else {
      //increment mid if was 1
      mid++
    }
  }
  return arr;
  
  
  
  
//   let freqCounter = [0,0,0];
//   let result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     freqCounter[value] = ++freqCounter[value];
//   }
//   for(let i = 0; i < freqCounter.length; i++) {
//     for (let j = 0; j < freqCounter[i]; j++) {
//        result.push(i);
//     }
//   }
//   return result;
}

assert.deepEqual(sortColors([]),[]);
assert.deepEqual(sortColors([0]),[0]);
assert.deepEqual(sortColors([2,1,0]),[0,1,2]);
assert.deepEqual(sortColors([2,1,0,1,2,0,1]),[0,0,1,1,1,2,2]);
assert.deepEqual(sortColors([2,0,2,1,1,0]),[0,0,1,1,2,2]);
