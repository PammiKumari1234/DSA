// Happy Number- 1st approach using set.

let num = 19;
function happy(n) {
    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        while (n > 0) {
            let rem = n % 10;
            sum = rem * rem + sum;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
   
    return 1 == n;
}
console.log(happy(num))

// using slow and fast pointers 

function squareSum(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isHappy(n) {
    let slow = n;
    let fast = squareSum(n);

    while (fast !== 1 && slow !== fast) {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    }

    return fast === 1;
}

console.log(isHappy(19)); // true
console.log(isHappy(4));  // false