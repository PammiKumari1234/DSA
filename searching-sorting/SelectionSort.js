// Selection sort - it selects the minimum number and then place the number on 1st index. 

let arr = [3, 9, 4, 7, 1, 80,6];

function sort() {
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
console.log(sort());

// TC - O(n²)
// SC - O(1)