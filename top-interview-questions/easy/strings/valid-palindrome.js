/*
  Got some practice with charCodeAt (or codePointAt )

  Second version utilizes a set of 0-9, a-z. Could have hard coded
  but still utilized codePointAt / fromCodePoint to loop through
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome2 = function(s) {
  let lowerS = s.toLowerCase();
  let left = 0;
  let right = lowerS.length - 1;
  let aCode = 'a'.codePointAt(0);
  let zCode = 'z'.codePointAt(0);
  let zeroCode = '0'.codePointAt(0);
  let nineCode = '9'.codePointAt(0);
  
  let alphaNumericSet = new Set();
  for (let i = aCode; i <= zCode; i++) {
  alphaNumericSet.add(String.fromCodePoint(i));
  }
  for (let i = zeroCode; i <= nineCode; i++) {
  alphaNumericSet.add(String.fromCodePoint(i));
  }
  
  while (right > left) {
      if (!alphaNumericSet.has(lowerS[left])) {
          left++;
      } else if (!alphaNumericSet.has(lowerS[right])) {
          right--;
      } else if (lowerS[right] !== lowerS[left]) {
          return false;
      } else {
          left++;
          right--;
      }
  }

  return true;
}

var isPalindrome = function(s) {
  let lowerS = s.toLowerCase();
  let left = 0;
  let right = lowerS.length - 1;
  let aCode = 'a'.codePointAt(0);
  let zCode = 'z'.codePointAt(0);
  let zeroCode = '0'.codePointAt(0);
  let nineCode = '9'.codePointAt(0);
  // Number.isInteger(+str);...
  let isNumeric = (str) => {
      let codePoint = str.codePointAt(0);
      return codePoint >= zeroCode && codePoint <= nineCode;
  }
  let isAlpha = (str) => {
      let codePoint = str.codePointAt(0);
      return codePoint >= aCode && codePoint <= zCode;
  }
  let isAlphaNumeric = (str) => isNumeric(str) || isAlpha(str);
  while (right > left) {
      if (!isAlphaNumeric(lowerS[left])) {
          left++;
      } else if (!isAlphaNumeric(lowerS[right])) {
          right--;
      } else if (lowerS[right] !== lowerS[left]) {
          return false;
      } else {
          left++;
          right--;
      }
  }
  return true;
};