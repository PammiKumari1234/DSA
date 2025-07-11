// Lenght of last word- 1st Approach

let str = "   hello    pammikumari    ";
function countL() {
     let count=0;
     for(let i=str.length-1;i>=0;i--){
        if(str[i]!==" "){
            count++;
        }
        else if(count>0){
            break;
        }
     }
     return count;
}
console.log(countL());

// TC - O(n)
// SC - O(1)
