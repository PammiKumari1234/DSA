// Pallindrome
let str = "LOL";

function Pall(arr){
    if(str.length<2) return false;
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
if(Pall(str)){
    console.log("String is Pallindrome")
}
else{
    console.log("String is not pallindrome");
}