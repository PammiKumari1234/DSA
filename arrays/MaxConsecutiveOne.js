// Max consecutive 1's

let arr = [0,0,1,1,0,0,1,1,1,1,0,0,1,1];

function MaxConsecutive(arr) {
    let maxCount=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            count++;
        }
        else if(count>0){
            maxCount=Math.max(count,maxCount);
            count=0;
        }
    }
    return maxCount;
}
console.log(MaxConsecutive(arr));

//TC- O(n)
//SC- O(1)