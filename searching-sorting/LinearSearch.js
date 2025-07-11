// Linear Search

let arr = [1, 3, 6, 9, 30];
let target = 30;
function Search(arr, target) {
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            return i;
        }
    }
    return -1;
}
console.log(Search(arr,target));

// TC - O(n)
// SC - O(1)
