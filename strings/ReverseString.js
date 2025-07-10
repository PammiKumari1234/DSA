// Reverse a string

let str="Hello I am Pammi";
function Reverse(str){
    let rev="";
    for(let i=0;i<str.length;i++){
        rev=str[i]+rev;
    }
    return rev;
}
console.log(Reverse(str));

// Reverse individual words

let str2="Hello I am Pammi";
function Reverse2(str2){
    let res=str2.split(" ").map((word)=>{
        let rev="";
        for(let i=0;i<word.length;i++){
            rev=word[i]+rev;
        }
        return rev;
    }).join(" ");
    return res;
}
console.log(Reverse2(str2));