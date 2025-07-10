// Find the missing number in the sequence

let arr=[0,1,4,3];
function MissingNum(arr){
    let n=arr.length;
    let total=n*(n+1)/2;
    let sum=arr.reduce((a,b)=>a+b,0);
    return total-sum;
}
console.log(MissingNum(arr));

//TC- O(n)
//SC- O(1)