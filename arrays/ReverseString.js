// Reverse the string in place

let str = ["h", "e", "l", "l", "o"];
function Reverse(str){
    let start=0;
    let end=str.length-1;
    while(start<end){
        let temp=str[start];
        str[start]=str[end];
        str[end]=temp;
        start++;
        end--;
    }
    return str;
}
console.log(Reverse(str));

// TC - O(n)
// SC - O(1)
