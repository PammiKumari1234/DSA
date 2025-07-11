// Bubble Sort

let arr = [4,5,1,3,9]
  
  function bubbleSort(arr){
    let n=arr.length;
    if(n<=0) return null;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
  }
console.log(bubbleSort(arr));

// TC - O(n²)
// SC - O(1)
