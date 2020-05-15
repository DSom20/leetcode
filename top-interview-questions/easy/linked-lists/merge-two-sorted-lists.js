/*
  Learning Points:
  1) Dummy can be critical, like for keeping track of head at end
  2) Think of merged list as a new list starting purely just with dummy
      Save dummy variable pointing to dummy node
      Pointers on current node of left, right, and merged lists
      In loop til a pointer points to null instead of true node
        Move lesser of currentNodes of L/R to current merged list node .next (break ties one way)
        Up the current node pointer of list that was moved from
        Up current node pointer of merged list always
      After loop, for list whose pointer still actually points to a node instead of null
        Add that node to end of merged list
      Return dummy.next as head of merged list

*/

/*
  Merge two sorted linked lists and return it as a new list. 
  The new list should be made by splicing together the nodes of the first two lists.

  Example:

  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
  Second Attempt (based on solution):
  Similar to first. But in first attempt, I was treating the left list AS the 
  merged list. So whenever I'd move a node from the right to the left, I'd fully
  implement JUST that node into the left, removing it from the right entirely.

  Now, dummy node is true starting point for new merged list, just points to null
  at first. Move lesser of two pointers' nodes to merged list (break ties to left).
  Sometimes may assign a node's .next to same as it just was, but keeps algo consistent

  Dummy was critical for returning head at end. Still not sure if I need to clear
  its .next pointer for garbage collection...

  See solution at http://www.goodtecher.com/leetcode-21-merge-two-sorted-lists/
*/
function mergeTwoLists(list1, list2) {
  let dummyNode = new ListNode(0);
  let leftCurrNode = list1;
  let rightCurrNode = list2;
  let currMergedListNode = dummyNode;
    
    while(leftCurrNode && rightCurrNode) {
        if (leftCurrNode.val > rightCurrNode.val) {
            currMergedListNode.next = rightCurrNode; // move right into merged list
            rightCurrNode = rightCurrNode.next; // up right pointer
        } else {
            currMergedListNode.next = leftCurrNode; // move left into merged list
            leftCurrNode = leftCurrNode.next; // up left pointer
        }
        currMergedListNode = currMergedListNode.next; // up currMergedListNode
    }
    
    if(leftCurrNode) {
        currMergedListNode.next = leftCurrNode; // move left into merged list
    } else {
        currMergedListNode.next = rightCurrNode; // move right into merged list
    }
  
  let head = dummyNode.next;
  // clean up dummy node for garbage collection
  dummyNode.next = null;
  
  return head;
}

// First Attempt
function mergeTwoLists(list1, list2) {
  let dummyNode = new ListNode(0, list1);
  let leftCurrNode = list1;
  let leftPrevNode = dummyNode;
  let rightCurrNode = list2;
  
  while(leftCurrNode && rightCurrNode) {
    if (leftCurrNode.val > rightCurrNode.val) {
      let temp = rightCurrNode.next;
      leftPrevNode.next = rightCurrNode;
      rightCurrNode.next = leftCurrNode;
      rightCurrNode = temp;
    } else if (leftCurrNode.val <= rightCurrNode.val) {
      leftCurrNode = leftCurrNode.next;
    }
    leftPrevNode = leftPrevNode.next;
  }
  
  if (!leftCurrNode) {
    leftPrevNode.next = rightCurrNode; 
  } else if (!rightCurrNode) {
    // do nothing 
  }
  
  let head = dummyNode.next;
  // clean up dummy node for garbage collection
  dummyNode.next = null;
  
  return head;
}