/*
  Learning Points:
    Did do/while first
    Only special case was ALL 9s
      So if got through loop without return yet, know it was all 9s
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(arr) {
    
  for (let index = arr.length - 1; index >= 0; index--) {
      if (arr[index] < 9) {
          arr[index] = ++arr[index];
          return arr;
      } else {
          arr[index] = 0;
      }
  }
  arr.unshift(1);
  return arr;

}

/*
  First Attempt
*/
// function plusOne(arr) {
//   let overflow = 0;
//   let index = arr.length - 1;
//   do {
//     if (index === -1) {
//       arr.unshift(1);
//       overflow = 0;
//     } else if (arr[index] === 9) {
//       arr[index] = 0;
//       overflow = 1;
//     } else {
//       arr[index]++;
//       overflow = 0;
//     }
//     index--;
//   } while (overflow);
//   return arr;
// }