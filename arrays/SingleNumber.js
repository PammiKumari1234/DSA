// Single Number 

let arr=[0,1,4,3,0,1,3,4,10];
function SingleNumber(arr){
    let xor=0;
    for(let i=0;i<arr.length;i++){
        xor = xor ^ arr[i];
    }
    return xor;
}
console.log(SingleNumber(arr));

//TC- O(n)
//SC- O(1)