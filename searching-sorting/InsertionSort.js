// Insertion sort 

let arr = [13, 4, 17, 1, 80, 6];
function sort() {
    let n = arr.length;
    for(let i=0;i<n;i++){
        let curr=arr[i];
        prev=i-1;
        while(curr<arr[prev] && prev>=0){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }   
    return arr;
}
console.log(sort())

// TC - Best: O(n), Worst: O(n²)
// SC - O(1)
