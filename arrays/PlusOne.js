// Add 1 at the last elemt of the array, and return the sum 
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

for (let i = digits.length - 1; i >= 0; i--) {
  if (digits[i] < 9) {
    digits[i]++;
    break;
  } else {
    digits[i] = 0;
  }
}