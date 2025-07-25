//Odd Even Linked List

//Input: head = [1,2,3,4,5]
//Output: [1,3,5,2,4]

var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let even=head.next;
    let odd=head;
    let evenStart=even;
    while(even && even.next){
        odd.next=odd.next.next;
        even.next=even.next.next;
        odd=odd.next;
        even=even.next;
    }
    odd.next=evenStart;
    return head;
};

//TC- O(n)
//SC - O(1)