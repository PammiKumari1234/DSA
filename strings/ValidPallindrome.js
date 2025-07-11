// 8. Valid Pallindrome

// let s = "race a car";
let s = "A man, a plan, a canal: Panama";
function Pall(s){
    let filteredStr="";
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredStr+=s[i];
        }
    }
    let rev="";
    for(let i=0;i<filteredStr.length;i++){
        rev=filteredStr[i]+rev;
    }
    return filteredStr==rev;
}
console.log(Pall(s));

// or 

function Palli(s){
    s=s.toLowerCase();
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++;
        }
        else if(!s[j].match(/[a-z0-9]/i)){
            j--;
        }
        else if(s[i]==s[j]){
            i++;
            j--;
        }
        else return false;
    }
    return true;
}
console.log(Palli(s));

// TC- O(n)
// SC- O(1)