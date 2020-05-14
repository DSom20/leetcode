/*
  Lessons:
  1) Don't need to reassign "head" if there's not actually a LL instance. Can
  just return some node that's understood to now be the "head" of some chain
  of nodes
  
  2) Don't be afraid to assign variables/pointers inside a while loop...saves
  handling edge cases if when outside currentNode.next throws error because currentNode
  is null...

  3) Recursion: wow. Just try to remember what each stack has a reference to

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
 * @return {ListNode}
 */

// 4th attempt (2nd recursive)
// Copy of recursive solution. Tricky
// First line handles null head from the get go, OR the base case that would
// come up via recursion where head.next === null
// We're only ever returning the final node
// Each recursive call, we essentially have a currentNode, 
//    want to assign the rightNode.next back to currentNode,
//    AND assign currentNode.next to null
// The previous fx on stack still has access to that currentNode via its
//    OWN currentNode's .next.
//    SO can cycle all the way back to initial head and assign initial head's .next to null
//    AND we had just been returning the initial end node through the recursive stack
//    so we can just return that as the new head
function reverseList(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let initialEndNode = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return initialEndNode; // as new head
}

// 3rd Attempt (1st Recursive)
// Using helper recursion to make it seem very similar to iterative way
function reverseList(head) {
  function _reverseList(previous,current) {
      if (current.next === null) {
          current.next = previous;
          return current;
      } else {
          let nextNode = current.next;
          current.next = previous;
          return _reverseList(current, nextNode);
      }
  }
  if (head === null) {
      return head;
  } else {
      return _reverseList(null,head);
  }
}

 // Second Attempt
 // Key change was to put assignment of right INSIDE the while loop and have the loop
 // condition check if MID is null, not right. This gets over the problem of checking
 // right.next when right is null
function reverseList(head) {
  let left = null;
  let mid = head;

  while(mid !== null) {
    let right = mid.next;
    mid.next = left;
    left = mid;
    mid = right;
  }

  return left;
} 


// First Attempt
// Messy. Had to handle special case of null head differently, and had weird
// extra step at end
var reverseList = function(head) {
  if (head === null) {
      return head;
  }
  let left = null;
  let mid = head;
  let right = head.next;
  
  while(right !== null) {
      mid.next = left;
      left = mid;
      mid = right;
      right = right.next;
  }
  
  mid.next = left;
  return mid;

  // DONT NEED TO ADJUST HEAD, just return mid- there is no actua linked list instance, head
  // is merely a lone variable that was pointing to the node that happened to be
  // first in a chain at one point

  // head = mid;
  // return head;
};