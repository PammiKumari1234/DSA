// Majority Element II- Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

let arr = [1, 2, 1, 2, 3, 1, 2, 3];
function swap() {
    let count1 = 0;
    let count2 = 0;
    let e1 = null; let e2 = null;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num === e1) {
            count1++;
        }
        else if (num === e2) {
            count2++;
        }
        else if (count1 == 0) {
            e1 = num;
            count1 = 1;
        }
        else if (count2 == 0) {
            e2 = num
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (let num of arr) {
        if (num == e1) count1++;
        if (num === e2) count2++;
    }
    let n = arr.length;
    let res = [];
    if (count1 > Math.floor(n / 3)) {
        res.push(e1);
    }
    if (count2 > Math.floor(n / 3) && e1 !== e2) {
        res.push(e2);
    }
    return res;
}

console.log(swap());
//TC- O(n)
//SC-o(1)