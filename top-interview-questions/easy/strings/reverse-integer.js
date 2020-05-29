/*
  Learnings:
    Math.sign(x) => 1,-1, or 0/-0
    Math.abs(x)
    Math.pow(base, exponent)  or base**exponent
    Overflow of 32 bit signed integer, when all ones in binary gets one more added -> becomes all 0s and lose that leftmost 1, so innaccurate.
    Leetcode given solution does fancy math stuff to not even convert to string
      remainder of x%10, math.floor of x/10
      result * 10, add remainder from above
      It also has weird way of checking in between those whehther continuing would trigger an overflow...unsure how math works for that

    I could shorten my string method with

      const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  
      if (reversedInt > 2**31) return 0;
  
      return reversedInt * Math.sign(x);
*/
/*
123 => 321
-123 => -321

store if neg
absolute value
stringify
result variable
for loop through string from end index
  push/concat to result
parseInt
times -1 if neg
*/
/*

function reverseInteger(int) {
  const isNegative = int < 0;
  const absoluteValOfInt = Math.abs(int);
  let stringifiedInt = (int).toString(10);
  let stringifiedResult = '';
  for (let i = stringifiedInt.length - 1; i >= 0; i--) {
    result += stringifiedInt[i];
  }
  let numResult = +stringifiedResult;
  if (isNegative) {
    numResult *= -1;
  } 
  return numResult;
}
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
  const absoluteValOfInt = Math.abs(x);
  let stringifiedInt = absoluteValOfInt.toString(10);
  let stringifiedResult = '';
  for (let i = stringifiedInt.length - 1; i >= 0; i--) {
  stringifiedResult += stringifiedInt[i];
  }
  let numResult = +stringifiedResult;
  if (isNegative) {
  numResult *= -1;
  }
  if (numResult < -(2**31) || numResult > (2**31) -1) {
      numResult = 0;
  }
  return numResult;
};