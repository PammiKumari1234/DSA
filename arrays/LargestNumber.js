//Find the largest number in the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function LargestNumber(arr){
    let largest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

console.log(LargestNumber(arr))

//TC- O(n)
//SC- O(1)