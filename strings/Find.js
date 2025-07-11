//Find words containing character
    let words = ["aaa", "cvb", "bca", "ms","abc"];
    let value = "a";
    function Find(words,value) {
        let res=[];
        for(let i=0;i<words.length;i++){
            if(words[i].includes(value)){
                res.push(words[i]);
            }
        }
        return res;
    }
    console.log(Find(words,value));

// TC - O(n * k)
// SC - O(m)

// or

function FindWord(words,value) {
        let res=[];
        for(let i=0;i<words.length;i++){
            for(let j=0;j<words[i].length;j++){
                if(words[i][j]==value){
                    res.push(words[i]);
                    break;
                }
            }
        }
        return res;
}
console.log(FindWord(words,value));

// TC- O(n*m) n=no of word , m=max length of each word.
// SC- O(1)