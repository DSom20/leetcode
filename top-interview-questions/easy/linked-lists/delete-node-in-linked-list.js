/*
  Was confusing, b/c explanation seemed to say i would have access to head, 
  but really didn't. Clever solution, O(1);
  But only works due to constraints of 
    The linked list will have at least two elements.
    **All of the nodes' values will be unique.
    **The given node will not be the tail and it will always be a valid node of the linked list.
    Do not return anything from your function.
  And given node already, not index of node


*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
    nextNode.next = null;
};