// Most Frequent Even Element- Given an integer array nums, return the most frequent even element. If there is a tie, return the smallest one. If there is no such element, return -1. (Leet - 2404)

let arr = [0, 1, 2, 2, 4, 4, 1]

function swap() {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            hash[arr[i]] = (hash[arr[i]] || 0) + 1;
        }
    }
    let maxValue = 0;
    let res = -1;
    for (let key in hash) {
        let maxKey = Number(key);
        let freq = hash[key];
        if (maxValue < freq || (freq == maxValue && maxKey < res)) {
            maxValue = freq;
            res = maxKey;
        }
    }
    return res;
}

console.log(swap());

//TC- O(n) for iterating through arr to build the frequency map.
//SC- O(k) for iterating through the keys in the hash object, where k is the number of distinct even elements.