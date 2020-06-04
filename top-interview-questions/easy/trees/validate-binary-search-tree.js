/*
  Fell into trap of only comparing children to parent, but really need to track ancestors in a certain way to make sure ALL left children are less than a given parent and right greater

  Hacked through it with BFS, actually fairly close to suggested DFS iterative example...
  Overall, did
  BFS Iterative
  DFS Recursive
  DFS Iterative
  In Order traversal iterative
  In Order traversal recursive

  Key Learnings:
    BST: see above
    In order traversal actually mattered
    In order traversal iterative was especially interesting

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
var isValidBST = function(root) {
  //InOrder Traversal 2: recursively store path array of values, then compare if each is less than next
  function _inOrderPath(rootNode, path=[]) {
      if (!rootNode) return path;
      _inOrderPath(rootNode.left, path);
      path.push(rootNode.val);
      _inOrderPath(rootNode.right, path);
      return path;
  }
  let inOrderPath = _inOrderPath(root);
  for (let i = 0; i < inOrderPath.length - 1; i++) {
      if (inOrderPath[i] >= inOrderPath[i+1]) return false;
  }
  return true;

  //InOrder Traversal 1: Iterative, compare as you traverse
  // let stack = [];
  // let previousVal = -Infinity;
  // let leftMost;
  // while (stack.length > 0 || root) {
  //     while (root) {
  //         stack.push(root);
  //         root = root.left;
  //     }
  //     leftMost = stack.pop();
  //     if (leftMost.val <= previousVal) return false;
  //     previousVal = leftMost.val;
  //     root = leftMost.right;
  // } 
  // return true;
  
  //DFS Iterative
  // if (!root) return true;
  // let stack = [{node: root, lower: -Infinity, upper: Infinity}];
  // while(stack.length > 0) {
  //     let {node, lower, upper} = stack.pop();
  //     if (node.val <= lower || node.val >= upper) return false;
  //     node.left && stack.push({node: node.left, lower: lower, upper: node.val});
  //     node.right && stack.push({node: node.right, lower: node.val, upper: upper})
  // }
  // return true;
  
  //DFS Recursive
  // function _isValidBST(rootNode, lowerLimit=-Infinity, upperLimit=Infinity) {
  //     if (!rootNode) return true;
  //     let currentVal = rootNode.val;
  //     if (currentVal <= lowerLimit || currentVal >= upperLimit) {
  //         return false;
  //     }
  //     if (!_isValidBST(rootNode.left, lowerLimit, currentVal)) {
  //         return false;
  //     }
  //     if (!_isValidBST(rootNode.right, currentVal, upperLimit)) {
  //         return false;
  //     }
  //     return true;
  // }
  // return _isValidBST(root);
  
  
  // //BFS
  // if (!root) return true;
  // let currentLevel = [{node: root, rightChildrenMustBeLessThan: Infinity, leftChildrenMustBeGreaterThan: -Infinity}];
  // let nextLevel = [];
  // while(currentLevel.length > 0) {
  //     for(let currentElement of currentLevel) {
  //         let left = currentElement.node.left;
  //         let right = currentElement.node.right;
  //         let currentVal = currentElement.node.val;
  //         if (left) {
  //             if(left.val < currentVal && left.val > currentElement.leftChildrenMustBeGreaterThan ) {
  //                 nextLevel.push({node:left, rightChildrenMustBeLessThan: currentVal, leftChildrenMustBeGreaterThan: currentElement.leftChildrenMustBeGreaterThan});
  //             } else {
  //                 return false;
  //             }
  //         }
  //         if (right) {
  //             if(right.val > currentVal && right.val < currentElement.rightChildrenMustBeLessThan) {
  //                 nextLevel.push({node:right, rightChildrenMustBeLessThan: currentElement.rightChildrenMustBeLessThan, leftChildrenMustBeGreaterThan: currentVal});
  //             } else {
  //                 return false;
  //             }
  //         }
  //     }
  //     currentLevel = nextLevel;
  //     nextLevel = [];
  // }
  // return true;
};