// find Fibonnaci using recursion

function Fibonnaci(n){
    if(n<=1) return n;;
    return Fibonnaci(n-1) + Fibonnaci(n-2);
}
let n=5;
console.log(Fibonnaci(n));

//TC: O(n)
//SC: O(n)