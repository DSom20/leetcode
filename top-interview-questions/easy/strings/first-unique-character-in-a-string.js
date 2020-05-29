/*
  hash map/freq counter
  Don't need to store index array in hash map since have access to it in 
  necessary second loop anyway

*/
// 2nd attemtpt: store count in hash map, not index, since have the index
// in the second loop anyway
function firstUniqueCharacter(str) {
  let indexCounter = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    indexCounter[char] ? indexCounter[char] += 1 : indexCounter[char] = 1;
  }  
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (indexCounter[char] === 1) return i;
  }
  return -1;
}


function firstUniqueCharacter(str) {
  let indexCounter = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    indexCounter[char] ? indexCounter[char].push(i) : indexCounter[char] = [i];
  }
  for (let char of str) {
    if (indexCounter[char].length === 1) {
      return indexCounter[char][0];
    }
  }
  return -1;
}