/*
  Learning:
    1) Could save a little time on brute force nested loop by making separate array
        of "noDuplicateList". When looping through main array, check if item is in
        nDL, if so, can splice it (maybe use object and delete instead). If not, append it.
        At end, only one item will be in nDL, so pop it and return
    2) Cool math solution: 
          2∗(a+b+c)−(a+a+b+b+c)=c
          ->   return 2 * sum(set(nums)) - sum(nums)
          ...but i have to define sum. Seems to be built in for python...
    3) Bit manipulation with XOR to keep space constant!!
        a = 0;
        for (let num of nums) {
          a ^= num;
        }
        return a;

  // PreCode Planning

  Array of Integers (non-empty) -> Integer
  Given arr of integers where every element appears 2x except for one,
    return that single element that does not appear twice
  
  SOrted? No
  Not twice == once? or three+ maybe?

  [1] -> 1
  [2,1,2] -> 1
  [2,3,1,3,2] -> 1
  [3,3,1] -> 1

  0(n) time
  O(1) space?

  Brute Force:
    nested loop, short circuit when no match
  
  Sort first (Time O(n log n), Space O(1))
    Then loop once, check if next item is same as previous.
      If so, have variable that marks present element as has many
      Move on until find different item
      If next item is not same as previous and this element is not marked yet as having many
        We've found the non-duplicate, return it
  
  Hash Table / Frequency Counter  (Time O(n), Space O(n))
    Make empty freqCounter
    Loop once through array, assign elements to freqCounter
    Loop through freqCounter, return key whose value is 1
  
*/

function singleNumber(nums) {
  let freqCounter = {};

  function addToFreqCounter(num) {
    freqCounter[num] ? freqCounter[num]++ : freqCounter[num] = 1;
  }

  for (let num of nums) {
    addToFreqCounter(num);
  }
  
  for (let num in freqCounter) {
    if (freqCounter[num] === 1) return num;
  }

}