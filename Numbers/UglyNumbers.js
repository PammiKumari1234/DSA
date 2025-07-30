// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5. Given an integer n, return true if n is an ugly number.
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

let n = 6;
function Add() {
    if (n <= 0) return false;
    let primes = [2, 3, 5];
    for (let p of primes) {
        while (n % p == 0) {
            n = Math.floor(n / p);
        }
    }
    return 1 === n;
}

console.log(Add())

//TC- O(log n)
//SC- O(n)