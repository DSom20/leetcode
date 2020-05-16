/*
Initially had no helper fx- super hard to follow logic for 3x3 part

Note: I'm essentially looping through whole board 3 times

Fix (not fully sure): Create 3 arrays of 9 sets each, one for rows, one for cols, one for grids. As looping, cleverly put cell in appropriate set in each array 
(and check if set already has value (if not a '.')); 
Main cleverness comes from grid
  One way of getting 9 grids: (3 * Math.floor(row/3)) + (col % 3))
OR see end of https://www.youtube.com/watch?v=Pl7mMcBm2b8
  Loop 9 times i
    Set up 3 sets
    Loop 9 times j
      check/add row[i][j]
      check/add col[j][i]
      clever way to deal with grid indexes:
        rowIndex = 3 * Math.floor(i/3)
        colIndex = 3 * (i%3)
        cell = board[rowIndex + j/3][colIndex + j%3]

  also see https://www.youtube.com/watch?v=i2YKwM9oCcY for clever solution utilizing bits / binary operators
*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(sudokuArr) {
  // check if rows valid
  for (let row of sudokuArr) {
    if (!isValidNineCellGroup(row)) return false;
  }
  
  // check if cols valid
  for (let i = 0; i < sudokuArr.length; i++) {
    let column = [];
    for (let j = 0; j < sudokuArr.length; j++) {
      column.push(sudokuArr[j][i]);
    }
    if(!isValidNineCellGroup(column)) return false;
  }
  
  // check if 3x3 blocks are valid
  for (let i = 0; i < sudokuArr.length; i += 3) {  // col
    for (let j = 0; j < sudokuArr.length; j += 3) {  // row
      let cellsIn3x3Grid = [];
      for (let rowInd = 0 + j; rowInd < j +3; rowInd++) {
        for (let colInd = 0 + i; colInd < i + 3; colInd++) {
          cellsIn3x3Grid.push(sudokuArr[rowInd][colInd]);
        }
      }
      if(!isValidNineCellGroup(cellsIn3x3Grid)) return false;
    }
  }
  return true;  
}

function isValidNineCellGroup(arr) {
  let set = new Set();
  for (let val of arr) {
    if (val !== "." && set.has(val)) {
      return false;
    } else {
      set.add(val); 
    }
  }
  return true;
}