// Check if array is pallindrome or not

let arr = [2, 3, 4, 3, 2];
function Pall(arr){
    if(arr.length<2) return false;
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!==arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
if(Pall(arr)){
    console.log("Array is Pallindrome")
}
else{
    console.log("Array is not pallindrome");
}

//TC- O(n)
//SC- O(1)