//factorial using recursion

let n=5;
function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1);
}
console.log(fact(n));

//TC: O(n)
//SC: O(n)