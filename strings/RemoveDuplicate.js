// Remove the duplicated from a sentence-

let str = "Hello I am Pammi";
function dup(str){
    const res=str.split("").filter((item,index,arr)=>(
        item==" " || arr.indexOf(item)==index
    )).join("");
    return res;
}
console.log(dup(str));

// TC - O(n²)
// SC - O(n)

// Remove duplicates from individual words-

let str2="Hello I am Pammi";
function filDup(str2){
    let res=str2.split(" ").map((word)=>(
        word.split("").filter((item,index,arr)=>(
            arr.indexOf(item)===index
        )).join("")
    )).join(" ");
    return res
}
console.log(filDup(str2));

// TC - O(n²)
// SC - O(n)