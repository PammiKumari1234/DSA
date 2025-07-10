// Count number of digits.
// Edge cases- If the number is negative or 0

let n=-98730;
function count(n){
    if(n==0) return 1;
    n=Math.abs(n);
    let count=0;
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(count(n));

//TC-O(log n)- dividing n by 10 in each iteration. the number of iterations is proportional to the number of digits. So the time complexity is O(log₁₀(n)), which is often simplified to O(log n)
//SC-O(1)