// Find the Index of the First Occurrence in a String
let haystack = "sadbutsad"
let needle = "sad"
function swap() {
    let n=needle.length;
    let m=haystack.length
    for(let i=0;i<=m-n;i++){
        let j=0;
        for(j=0;j<n;j++){
            if(haystack[i+j]!==needle[j]){
                break;
            } 
        }
        if(j===n) return i;
    }
    return -1
}

console.log(swap());

TC- O(n*m)
SC- O(1)