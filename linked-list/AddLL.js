//Add two LL into 1 - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    let ans=new ListNode();
    let copy=ans;
    let carry=0;
    while(l1 || l2 || carry){
        let sum=(!l1 ? 0 :l1.val) + (!l2 ? 0 :l2.val) + carry;
        carry=Math.floor(sum/10);
        let digit=sum%10;

        let newNode=new ListNode(digit);
        ans.next=newNode;
        ans=ans.next
        l1=l1 && l1.next;
        l2=l2 && l2.next;

    }
    return copy.next;
};