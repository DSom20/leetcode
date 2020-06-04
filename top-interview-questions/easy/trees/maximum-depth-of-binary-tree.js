/*
  Did BFS first, then DFS Recursive, then DFS iterative.
  Favorite is definitely the recursive one- short and sweet

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  //DFS Iterative
  if (!root) return 0;
  let maxLevel = 1;
  let stack = [{node: root, level: 1}];
  while (stack.length > 0) {
      let currentElement = stack.pop();
      let currentLevel = currentElement.level;
      let left = currentElement.node.left;
      let right = currentElement.node.right;
      if (left || right) {
          left && stack.push({node: left, level: currentLevel + 1});
          right && stack.push({node: right, level: currentLevel + 1});
      } else {
          maxLevel = Math.max(maxLevel, currentLevel);
      }
  }
  return maxLevel;
  
  //DFS Recursive
  // function _maxDepth(node, parentLevel) {
  //     if (node === null) return parentLevel;
  //     let updatedLevel = parentLevel + 1;
  //     return Math.max(_maxDepth(node.left, updatedLevel), _maxDepth(node.right, updatedLevel));
  // }
  // return _maxDepth(root, 0);
  
  
  //BFS
//     if (!root) return 0;
  
//     let level = 0;
//     let currentLevelList = [root];
//     let nextLevelList = [];
//     while (currentLevelList.length > 0) {
//         for (let currentNode of currentLevelList) {
//             currentNode.left && nextLevelList.push(currentNode.left);
//             currentNode.right && nextLevelList.push(currentNode.right);
//         }
//         currentLevelList = nextLevelList;
//         nextLevelList = [];
//         level++;
//     }
//     return level;
};