// Binary Search - Array need to be sorted, use left , right, middle concept. 

let arr = [1, 3, 6, 9, 30,40, 50];
let target = 30;
function Search(arr, target) {
    let left=0;
    let right=arr.length-1;
        while(left<=right){
            let middle=Math.floor((left+right)/2);
            if(target==arr[middle]){
                return middle;
            }
            else if(target<=arr[middle]){
                right=middle-1;
            }
            else{
                left=middle+1;
            }
        }
    return -1;
}
console.log(Search(arr, target));

// TC - O(log n)  Dividing the array in half in each iteration.
// SC - O(1)
