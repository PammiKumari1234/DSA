//Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Write code here inside this function
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

let middle = middleNode(head);
console.log("Middle value:", middle.val); // ➜ 3

//TC- O(n);
//SC- O(1);
