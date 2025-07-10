// Move zeroes to end, while maintaining the relative order and in place. 

let arr=[0,1,0,2,3,0];
function Zero(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[x]=arr[i];
            x++;
        }
    }
    for(let i=x;i<arr.length;i++){
        arr[i]=0;
    }
    return arr;
}
console.log(Zero(arr))

//TC- O(n)
//SC- O(1)