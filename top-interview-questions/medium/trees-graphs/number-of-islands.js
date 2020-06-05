/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0;
  let numRows = grid.length;
  let numCols = grid[0].length;
  let visited = Array(numRows).fill(0).map(rowToBe => Array(numCols).fill(0));
  let currNode;
  let numIslands = 0;
  
  for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
          if (!visited[row][col]) {
              currNode = grid[row][col];
              // visited[row][col] = 1;
              if (currNode === "1") {
                  numIslands++;
                  _markRestOfIslandAndCoastAsVisited(row,col);
              }
          }
      }
  }
  
  return numIslands;
      
  function _markRestOfIslandAndCoastAsVisited(row,col) {
      let queue = [[row,col]];
      while(queue.length > 0) {
          [row,col] = queue.shift();
          if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
            continue;
          }
          if (visited[row][col]) {
            continue;
          }
          visited[row][col] = 1;
          if (grid[row][col] === '0') {
            continue;
          }
          queue.push([row,col-1]); //left
          queue.push([row,col+1]); //right
          queue.push([row-1,col]); //up
          queue.push([row+1,col]); //down
          // //left
          // if (col > 0) {  // only try to add to visited and potentially enqueue if actually on grid
          //     if (!visited[row][col-1]) {
          //         visited[row][col-1] = 1;
          //         if (grid[row][col-1] === "1") { //only enqueue if more land
          //             queue.push([row,col-1]);
          //         }
          //     }
          // }
          // //right
          // if (col < numCols - 1) {
          //     if (!visited[row][col+1]) {
          //         visited[row][col+1] = 1;
          //         if (grid[row][col+1] === "1") {
          //             queue.push([row,col+1]);
          //         }
          //     }
          // }
          // //up
          // if (row > 0) {
          //     if (!visited[row-1][col]) {
          //         visited[row-1][col] = 1;
          //         if (grid[row-1][col] === "1") {
          //             queue.push([row-1,col]);
          //         }
          //     }
          // }
          // //down
          // if (row < numRows - 1) {
          //     if (!visited[row+1][col]) {
          //         visited[row+1][col] = 1;
          //         if (grid[row+1][col] === "1") {
          //             queue.push([row+1,col]);
          //         }
          //     }
          // }
      }
  }
};