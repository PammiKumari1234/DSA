// Two Sum II - Input Array Is Sorted- Array is 1-indexed and in non-decreasing order. Return array added by one. 

let arr = [2,7,11,15]
let target = 9;
var twoSum = function(arr, target) {
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]==target){
            return [i+1,j+1];
        }
        else if(arr[i]+arr[j]>target){
            j--;
        }
        else{
            i++;
        }
    }
};
console.log(twoSum(arr, target));

//TC- O(n)
//SC- O(1)