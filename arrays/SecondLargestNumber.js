//Find the second largest number in the array

let arr = [1, 2, 3, 4, 5, 60, 70, 8, 9, 10];
function SecondLargestNum(arr){
    if(arr.length<2) return null;
    let firstLargest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest=firstLargest;
            firstLargest=arr[i];
        }
        if(arr[i]>secondLargest && firstLargest!=arr[i]){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}
console.log(SecondLargestNum(arr));

//TC- O(n)
//SC- O(1)