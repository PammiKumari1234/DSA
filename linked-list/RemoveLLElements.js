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