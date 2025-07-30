//Find the number which is occuring most. 
// Input: arr = [2,2,1,1,1,2,2]
// Output: 2

let arr= [2,2,1,1,1,2,2];
function MajorityELem(arr){
    let res=0;
    let majority=0;
    for(let i=0;i<arr.length;i++){
        if(majority==0){
            res=arr[i];
        }
        if(arr[i]==res){
            majority++;
        }
        else{
            majority--;
        }
    }
    return res;
}
console.log(MajorityELem(arr));

//TC- O(n)
//SC- O(1)