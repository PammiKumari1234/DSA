// Is Subsequence- Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// Input: s = "abc", t = "ahbgdc"
// Output: true

let s = "abc"
let t = "ahbgdc"
function subs() {
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i == s.length;
}
console.log(subs())