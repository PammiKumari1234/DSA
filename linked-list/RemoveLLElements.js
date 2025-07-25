//Remove Linked List Elements
//Input: head = [1,2,6,3,4,5,6], val = 6
//Output: [1,2,3,4,5]

var removeElements = function(head, val) {
    let sentinel=new ListNode();
    sentinel.next=head
    let prev=sentinel;
    while(prev && prev.next){
        if(prev.next.val==val){
            prev.next=prev.next.next;
        }
        else{
            prev=prev.next;
        }
    }
    return sentinel.next;
};

//Remove nth node from end of the list - Given the head of a linked list, remove the nth node from the end of the list and return its head. 
//Input: head = [1,2,3,4,5], n = 2
//Output: [1,2,3,5]

// 1st Approach (Using Two Pass) 
var removeNthFromEnd = function(head, n) {
    let sentinel=new ListNode();
    sentinel.next=head;
    
    let len=0;
    while(head){
        head=head.next;
        len++;
    }
    let prev=sentinel;
    let prevPos=len-n;
    for(let i=0;i<prevPos;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;
    return sentinel.next;
};

//TC- O(n)
//SC-O(1)

//2nd Approach - One Pass

var removeNthFromEnd = function(head, n) {
    let sentinel=new ListNode();
    sentinel.next=head;
    
    let slow=sentinel;
    let fast=sentinel;
    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
    return sentinel.next;
};

//TC- O(n)
//SC-O(1)


//Remove Duplicates from LL- 
//Input: head = [1,1,2,3,3] Output: [1,2,3]
var deleteDuplicates = function(head) {
    let curr=head;
    while(curr && curr.next){
        if(curr.val !== curr.next.val){
            curr=curr.next;
        }
        else {
            curr.next=curr.next.next;
        }
    }
    return head;
};

//TC- O(n)
//SC-O(1)



