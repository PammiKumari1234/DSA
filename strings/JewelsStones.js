let jewels = "aA";
let stones = "aAAbbbb"
function JSP() {
    let count=0;
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i]==jewels[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(JSP())

// TC - O(n * m) 
// SC - O(1)

// or

// let jewels = "aA";
// let stones = "aAAbbbb"
function JSPi() {
    let count=0;
    let newSet=new Set();
    for(let i=0;i<jewels.length;i++){
        newSet.add(jewels[i]);
    }
    for(let i=0;i<stones.length;i++){
        if(newSet.has(stones[i])){
            count++;
        }
    }
    return count;
}
console.log(JSPi());

// TC - O(m) 
// SC - O(1)
