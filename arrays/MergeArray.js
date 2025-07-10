// Merge 2 arrays where num1 and num2 are two array, and m represents the no of the elements, rest can be ignored, and n represents the no of elements in nums2.

let nums1=[1,2,3,0,0,0];
let nums2=[2,5,6];
let m=3;
let n=3;

function Merge(){
    let nums1Copy=nums1.slice(0,m);
    let p1=0;
    let p2=0;
    for(let i=0;i<m+n;i++){
        if(p2>=n || (p1<m && nums1Copy[p1]<nums2[p2])){
            nums1[i]=nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i]=nums2[p2];
            p2++;
        }
    }
    return nums1;
}
console.log(Merge())

//TC- O(m+n)
//SC- O(m)