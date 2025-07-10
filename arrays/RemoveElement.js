// Remove the value from the array and return the array with all occurenece of the elements except the value which needs to be removed.

let arr = [0, 4, 0, 1, 1, 4, 1, 2, 2, 3, 3, 4];
let value=4;
function RemoveElm(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==value){
            arr[x]=arr[i];
            x++;
        }
    }
    arr.length=x;
    return arr;
}
console.log(RemoveElm(arr));

// TC - O(n)
// SC - O(1)
