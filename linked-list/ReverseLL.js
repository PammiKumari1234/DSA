//Reverse Linked List- Given the head of a singly linked list, reverse the list, and return the reversed list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

//write code here
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    head=prev
    return head;
};
let reversed = reverseList(head);
let curr = reversed;
while (curr) {
  console.log(curr.val); // Outputs: 5, 4, 3, 2, 1
  curr = curr.next;
}