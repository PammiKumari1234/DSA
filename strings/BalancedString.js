// Split a String in Balanced Strings- 

let string = "RLRRLLLRLR";
function balanced(string){
    let count=0;
    let t=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=="L"){
            count+=1;
        }
        else{
            count+=-1;
        }
        if(count==0){
            t++;
        }
    }
    return t;
}
console.log(balanced(string));

// TC- O(n)
// SC- O(1)