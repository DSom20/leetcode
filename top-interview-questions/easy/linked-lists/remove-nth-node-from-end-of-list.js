/*
  Learning points:
    1) Use dummy node to point to head to make deletion consistent in terms of deleting
    current.next
    2) Use two pointers
    3) Use a separate loop to set up appropriate starting positions for pointers rather
    than just one loop that has logic for when to start moving both
*/

/*
  Given a linked list, remove the n-th node from the end of list and return its head.

  Example:

  Given linked list: 1->2->3->4->5, and n = 2.

  After removing the second node from the end, the linked list becomes 1->2->3->5.
  Note:

  Given n will always be valid.

  Follow up:

  Could you do this in one pass?
*/

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
  let dummy = new ListNode(0,head);
  let first = dummy;
  let second = dummy;
  // traverse n times to get first appropriately ahead of second
  for (let i = 0; i < n + 1; i++) {
      first = first.next;
  }
  // traverse until first is one past end of list, moving both pointers up each time
  while (first !== null) {
      first = first.next;
      second = second.next;
  }
  // delete the node after second. Want to return head, but may have deleted head, in which
  // case second would have still been referring to dummy, so dummy.next would equal the new
  // head. So return dummy.next to be safe.
  let nodeToDelete = second.next;
  second.next = nodeToDelete.next;
  nodeToDelete.next = null;
  return dummy.next;  
};


/*
  2nd attempt, only using one pass. But not using dummy node, and have only
  one loop with an if condition for when to start moving left pointer, rather
  than have separate loops for setting up enough space between R/L and then
  moving both.
*/
// function removeNthFromEnd(head, n) {
//     let count = 0;
//     let lt = head;
//     let rt = head;
//     while (rt !== null) {
//         if (count > n) {
//             lt = lt.next;
//         } 
//         rt = rt.next;
//         count++;
//     }
//     if (count === 1) {
//         let head = null;
//         return head;
//     }
//     if (count - n === 0) {
//         let oldHead = head;
//         head = head.next;
//         oldHead.next = null;
//         return head;
//     }
  
//     let nodeToDelete = lt.next;
//     lt.next = nodeToDelete.next;
//     nodeToDelete.next = null;
//     return head;
// }


/*
  First try. Two passes. Could've simplified things with a "dummy" node to point
  at head, assign currentNode to dummy for second pass, that way always just deleting
  currentNode.next
*/
// function removeNthFromEnd(head, n) {
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
// }