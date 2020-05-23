const assert = require('assert').strict;

/*
  Learning:
    Took solid 2+ hours debugging
    Worked out pseudocode in like 50 min that almost worked in the end. Just had to fix a couple little things
    Most straightforward better solution that is in place is to "transpose" matrix, then flip horizontally.
    Also, if not in place, can do nifty indexing math to write it concisely.
    See http://buttercola.blogspot.com/2014/08/leetcode-rotate-image.html
      Note: he says transpose solution is n^2,
      but really i think it might just be 2n -> n
    

*/

function rotate(matrix) {
  if (matrix[0] === undefined) return [];
  let n = matrix[0].length;
  for (let i = 0; i < Math.floor(n/2); i++) { //number of squares
    for (let j = 0; j < n - 1 - (i * 2); j++) {  // number of times around a square
      let p1y = i;
      let p1x = i+j;
      let p2y = p1x;
      let p2x = n - 1 - p1y;
      let prevVal = matrix[p1y][p1x];
      let nextVal = matrix[p2y][p2x];
      for (let k = 0; k < 4; k++) {
        // temp = matrix[p2y][p2x];
        matrix[p2y][p2x] = prevVal;
        let oldp2y = p2y;
        let oldp2x = p2x;
        p2x = n - 1 - oldp2y;
        p2y = oldp2x;
        p1y = oldp2y;
        p1x = oldp2x;
        prevVal = nextVal;
        nextVal = matrix[p2y][p2x];
      }
    }
  }
  return matrix;
}

const input1 = [];
const output1 = [];
const input2 = [[1]];
const output2 = [[1]];
const input3 = [
  [1,2],
  [3,4],
];
const output3 = [
  [3,1],
  [4,2]
];
const input4 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const output4 = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
];
const input5 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
const output5 = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11] 
]

assert.deepEqual((rotate(input1)), (output1));
assert.deepEqual((rotate(input2)), (output2));
assert.deepEqual((rotate(input3)), (output3));
assert.deepEqual((rotate(input4)), (output4));
assert.deepEqual((rotate(input5)), (output5));
