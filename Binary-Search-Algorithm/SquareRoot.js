// Find the Square root of X 

let x = 20;
function sq(x) {
    if (x <= 1) return x;
    let left = 2;
    let right = Math.floor(x / 2);
    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2));
        if (x === mid * mid) {
            return mid;
        }
        else if (x < mid * mid) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return right;
}

console.log(sq(x));

//TC- O(log n)
//SC- O(1)