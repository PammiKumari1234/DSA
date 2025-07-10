// Remove Duplicates from Sorted Array

let arr=[0,0,1,1,1,2,2,3,3,4]; 
function RemvDuplicates(arr){
    let x=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x=x+1;
            arr[x]=arr[i];
        }
    }
    arr.length=x+1;
    return arr;
}
console.log(RemvDuplicates(arr))

// TC - O(n)
// SC - O(1)
