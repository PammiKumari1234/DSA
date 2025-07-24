//Find the intersection os 2 LL - Using Hash Map

var getIntersectionNode = function(headA, headB) {
    let set=new Set();
    let curr=headA;
    while(curr){
        set.add(curr);
        curr=curr.next;
    }
    let currB=headB;
    while(currB){
        if(set.has(currB)){
            return currB
        }
        currB=currB.next
    }
    return null;
};