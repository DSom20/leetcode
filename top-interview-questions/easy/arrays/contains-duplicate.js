/*
  Lessons:
  1) Ask if sorted array
  2) "Loop Invariant" = property that holds before (and after) each iteration through a loop. Used to prove correctness of brute force nested loop. EG Before the next search, there are no duplicate integers in the searched integers.
  2) SORTING. Went from brute force straight to hash map. There is actually a middle option that has o(n) space complexity unlike hash map and in between time of O(n log n). SORT array in place first (eg heapsort)
*/

/*
 Array[integers] -> Boolean
 Find if array contains any duplicates
Returns T if 2+ of any element, F if every element is distinct
ASK IF ARRAY IS SORTED

[] -> False
[1] -> False
[1,1] -> True
[1,2,3,4] -> False
[1,2,3,3,4] -> True
[1,2,1,2] -> True

Brute force, nested loop
Hash Table

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
  let counter = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (counter.has(arr[i])) {
     return true;
    } else {
     counter.add(arr[i]);
    }
  }
    // counter.has(arr[i]) ? return true : counter.add(arr[i]);  // can't use return like this
  // }
  return false;
};