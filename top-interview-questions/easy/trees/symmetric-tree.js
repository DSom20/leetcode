/*
  Did BFS first, essentially checking if each level was an anagram with two pointers

  The given solution was based on a clever insight that a tree is symmetric if its right subtree is a mirror of its left subtree. Further, any TWO trees are mirrors of each other if 
    1) Their roots were equal
    2) Each of their right sub-trees was a mirror of the other's left sub-tree
  Can check that recursively by sending in two trees to a function
    check if values are equal
    then send in .left of tree1 and .right of tree2 (and vice versa) to same function recursively

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  //Recursive with mirror helper
  function _isMirror(root1, root2) {
      if (!root1 && !root2) return true;
      if (!root1 || !root2) return false;
      return (
              root1.val === root2.val
              && _isMirror(root1.left, root2.right)
              && _isMirror(root1.right, root2.left)
             )
  }
  return _isMirror(root, root);

  // //BFS
  // if (!root) return true;
  // let currentLevel = [root];
  // let nextLevel = [];
  // while (currentLevel.length > 0) {
  //     //check if currentLevel is mirrored
  //     let leftPt = 0;
  //     let rightPt = currentLevel.length - 1;
  //     let bothNull;
  //     let bothNodes;
  //     let leftNode;
  //     let rightNode;
  //     while (leftPt < rightPt) {
  //         leftNode = currentLevel[leftPt];
  //         rightNode = currentLevel[rightPt];
  //         bothNull = !rightNode && !leftNode;
  //         bothNodes = rightNode && leftNode;
  //         if (!bothNull && !bothNodes) return false;
  //         if (bothNodes && (leftNode.val !== rightNode.val)) {
  //             return false;
  //         }
  //         leftPt++;
  //         rightPt--;
  //     }
  //     //assign next level, skipping nulls from currentLevel but assigning nulls on nextLevel
  //     for (let element of currentLevel) {
  //         if (element) {
  //             nextLevel.push(element.left);
  //             nextLevel.push(element.right);
  //         }
  //     }
  //     currentLevel = nextLevel;
  //     nextLevel = [];
  // }
  // return true;
};