// Sum of all numbers in an array

let arr = [1, 2, 3, 4, 5];
function Sum(n){
    if(n===0) return arr[n];
    return arr[n]+Sum(n-1);
}
console.log(Sum(arr.length-1));