/*
  Array of nums, target num -> 2 indices of the values that sum to that target

  Guaranteed one and only one solution. Can't use same element twice
  negative nums?

  return as array?

  [1,2], 3 -> [0,1]

  [1,3,2,9], 10 -> [0,3]

  Brute force:
  nested loop; inner loop: check if arr[i] + arr[j] === target, return [i,j] if so

  Hash table/freq counter
  Loop through array, adding each as key to hash table with value = index. Check if hash table already has
  element, and if so, if two together equal target, then break early, otherwise skip...
  After, loop through hash table, check if hash[target - currentKey] exists, if so, return their values (indices) as array 
*/

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }

  // Map
  // let map = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i]) && nums[i] * 2 === target) return [map.get(nums[i]), i];
  //   map.set(nums[i], i);
  // }
  
  // // Iterate over map with forEach version
  // let matchedPairs;
  // map.forEach((value, key) => {
  //   let match = target - key;
  //   if (map.has(match)) {
  //     let idx1 = map.get(match);
  //     matchedPairs =  idx1 > value ? [value,idx1] : [idx1,value];
  //   }
  // })
  // return matchedPairs;

  // Iterate over map with .entries version
  // for (let [key,value] of map.entries()) {
  //   let match = target - key;
  //   if (map.has(match)) {
  //     let idx1 = map.get(match);
  //     return idx1 > value ? [value,idx1] : [idx1,value];
  //   }
  // }

  // Object, vs Map
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //     if (map[nums[i]] !== undefined && nums[i] * 2 === target) return [map[nums[i]], i];
  //     map[nums[i]] = i;
  // }
  
  // for (let key in map) {
  //     let match = target - key;
  //     if (match !== key && map[match]) {
  //         return map[match] > map[key] ? [map[key], map[match]] : [map[match], map[key]]
  //     }
  // }
}