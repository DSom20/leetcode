const assert = require('assert').strict;

/*
  Learning Points:
    "In-place doesn't mean can't use recursion"
      Does in-place mean constant space complexity?

      No. By definition, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure.

      The tricky part is that space is used by many actors, not only by data structures. The classical example is to use recursive function without any auxiliary data structures.

      Is it in-place? Yes.

      Is it constant space? No, because of recursion stack. 
    
    Two Pointers
    Could use recursion, helper that takes in the two pointers
*/

/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    //swap values at left and right indices
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    left++;
    right--;
  }
  return arr;
}

assert.deepEqual(reverseString([]),[]);
assert.deepEqual(reverseString(['a']),['a']);
assert.deepEqual(reverseString(['a','b']),['b','a']);
assert.deepEqual(reverseString(['a','b','c','d','e']),['e','d','c','b','a']);
assert.deepEqual(reverseString(['a','b','c','d','e','f']),['f','e','d','c','b','a']);