// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Input: num = 38
// Output: 2

let num = 11;
function Add(num) {
    if (num < 10) return num;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return Add(sum)
}

console.log(Add(num));

//TC- O(n)
//SC-O(1)