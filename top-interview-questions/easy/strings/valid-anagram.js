/*
  Could str->arr and sort, then loop through one and make sure both are same at each index

  Could make freqCounter as 26 element array
    loop through str, check charAt(i), then place in approprite spot in freqCounter with str.charAt(i) - 'a'
  -str1 occurrences add to value
  -str2 occurrences subtract from value
  --Check at end that each value of counter is 0

  Could also use two counters. Make first counter as positives
  -second counter from str2 decrements each counter-key
    --check if less than zero ever-->return false

  My hash table soln works well for final unicode example: since
    don't know how many unicode chars there might be (as opposed to
      just 26 lowercase letters)
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let freqCounterS = new Map();
  let freqCounterT = new Map();
  for (let char of s) {
      let value = freqCounterS.get(char);
      value ? freqCounterS.set(char, ++value) : freqCounterS.set(char, 1);
  }
  for (let char of t) {
      let value = freqCounterT.get(char);
      value ? freqCounterT.set(char, ++value) : freqCounterT.set(char, 1);
  }
  
  if (freqCounterS.size !== freqCounterT.size) return false;
  
  for (let [key,value] of freqCounterS) {
      if (freqCounterT.get(key) !== value) return false;
  }
  
  return true;
};