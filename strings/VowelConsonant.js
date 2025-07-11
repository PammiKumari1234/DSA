// Find the most common vowel and consonant. 

let word="successes";
function MostCommon(word){
    let vowels=["a","e","i","o","u"];
    let comVow=0;
    let comCons=0;
    let hash={};
    for(let i=0;i<word.length;i++){
        if(!hash[word[i]]){
            hash[word[i]]=1;
        }
        else{
            hash[word[i]]++;
        }
    }
    for(let key in hash){
        if(vowels.includes(key)){
            comVow=Math.max(comVow,hash[key])
        }
        else{
            comCons=Math.max(comCons,hash[key])
        }
    }
    

    return comVow+comCons;
}
console.log(MostCommon(word));

// TC - O(n)
// SC - O(u)   // u = number of unique characters
