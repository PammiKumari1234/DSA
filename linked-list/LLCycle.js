//Linked List Cycle- Given head, the head of a linked list, determine if the linked list has a cycle in it.

// 1st Approach- Using Set/Hash Map

var hasCycle = function(head) {
  let newSet = new Set();
  let curr = head;
  while (curr) {
    if (newSet.has(curr)) {
      return true;
    }
    newSet.add(curr);
    curr = curr.next;
  }
  return false;
};

//2nd approach Floyd's Cycle Finding Algorithm 

var hasCycle = function(head) {
    if(head==null) return false;
    let slow=head;
    let fast=head.next;
    while(slow!=fast){
        if(fast==null || fast.next==null) return false;
        slow=slow.next;
        fast=fast.next.next;
    }
    return true;
};