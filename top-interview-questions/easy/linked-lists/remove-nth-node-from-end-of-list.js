/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let count = 0;
  let lt = head;
  let rt = head;
  while (rt !== null) {
      if (count > n) {
          lt = lt.next;
      } 
      rt = rt.next;
      count++;
  }
  if (count === 1) {
      let head = null;
      return head;
  }
  if (count - n === 0) {
      let oldHead = head;
      head.next = oldHead.next;
      oldHead.next = null;
  }
  
  let nodeToDelete = lt.next;
  lt.next = nodeToDelete.next;
  nodeToDelete.next = null;
  return head;
  
//     let currentNode = head;
//     let length = 0;
//     while(currentNode !== null) {
//         currentNode = currentNode.next;
//         length++;
//     }
//     if (length === 1) {
//         let head = null;
//         return head;
//     }
  
//     if (length + 1 - n === 1) {
//         let oldHead = head;
//         head = oldHead.next;
//         oldHead.next = null;
//         return head;
//     }
  
  
//     let countFromBeginningBase1 = length + 1 - n;
//     currentNode = head;
//     for (let i = 1; i < countFromBeginningBase1 - 1; i++) {
//         currentNode = currentNode.next;
//     }
//     let nodeToDelete = currentNode.next;
//     currentNode.next = nodeToDelete.next;
//     nodeToDelete.next = null;
  
//     return head;
  
};