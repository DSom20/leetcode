/*
  Learning:
  1) Object.keys(obj), NOT obj.keys()
  2) For hash map, could just create one for shorter, then loop thru longer array,
      compare each element with hash table of first. If match, add element to 
      intersection array AND decrement that key's count in hash table
  3) Could sort first, then use two pointers, one on each array, starting from beginning
      i = 0, j = 0;
      While (i < nums1.length && j < nums2.length)
        If match (nums1[i] === nums2[j]), add that num to intersection, increment both pointers
        If i < j, increment i
        If j < i, increment j
  4) Stuff about loading from disk...no idea

  Solutions:
  https://buttercola.blogspot.com/2016/06/leetcode-intersection-of-two-arrays-ii.html

  Arr1 Arr2 -> Arr3
  Given 2 arrays, write a fx to compaire their intersection

  Intersection meaning the elements they share? Y
  Duplicates? Yes, when both have duplicates
  Sorted? Not necessarily

  Output as array? Y
  Sorted output? No, don't need to

  Integers? Y

  Examples:

  [] [] -> []
  [1] [] -> []
  [1] [1] -> [1]
  [1,1,2] [1,1] -> [1,1]

  [1,2] [2,1] -> [1,2]
  [1,2] [4,2,3] -> [2]
  [2,4,3,1] [3,4,5] -> [3,4]

  [1,2,3] [4,5,6] -> []

  Brute Force
    Nested loop. 
    Make intersection array variable.
    Loop through arr1
      If element already in intersection array, skip
      Else, compare with eac element in arr2
        If ever hit a match, add that element to intersection array, and break out of nested loop
    Return intersection array
  
  Hash Table
    Create set out of first array's elements
    Create set out of second array's elements
    Create empty intersection array
    Loop shorter set
      If element in other set, add to intersection array

*/

function intersect(nums1, nums2) {
  let intersection = [];

  //this section worked if ignore duplicates...
  // const set1 = new Set(nums1);
  // const set2 = new Set(nums2);

  // let shorterSet, longerSet;
  // [shorterSet, longerSet] = set1.size < set2.size ? [set1, set2] : [set2, set1];
  
  // for (let num of shorterSet) {
  //   if (longerSet.has(num)) intersection.push(num);
  // }
  
  // return intersection;

  function createFreqCounter(arr) {
    let freqCounter = {};
    for(let val of arr) {
      freqCounter[val] ? freqCounter[val]++ : freqCounter[val] = 1;
    }
    return freqCounter;
  }
  const freqCounter1 = createFreqCounter(nums1);
  const freqCounter2 = createFreqCounter(nums2);
  let shorterCounter, longerCounter;
  [shorterCounter, longerCounter] = 
    // Object.keys(freqCounter1).length < Object.keys(freqCounter2).length
    // ? [freqCounter1, freqCounter2]
    // : [freqCounter2, freqCounter1];
    nums1.length < nums2.length 
    ? [freqCounter1, freqCounter2] 
    : [freqCounter2, freqCounter1];
  for (let key in shorterCounter) {
    if (longerCounter[key]) {
      let smallerCount = shorterCounter[key] < longerCounter[key]
                        ? shorterCounter[key]
                        : longerCounter[key];
      for (let i = 0; i < smallerCount; i++) {
        intersection.push(key);
      }
    }
  }

  return intersection;

}