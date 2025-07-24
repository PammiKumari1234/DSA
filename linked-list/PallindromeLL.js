// Check if the LL is Pallindrome or not;

var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev=null
    let curr=slow;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    let left=head;
    let right=prev;
    while(right){
        if(left.val!==right.val){
        return false;
    }
    left=left.next;
    right=right.next;
    }
    return true;
};

//TC- O(n)
//SC- O(1)