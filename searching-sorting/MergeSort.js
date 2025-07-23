//Merge Sort(Divide & Conquer Algorithm)- It divides the whole array into two smaller array, it wil keep on dividing in to two, till it reache last. While coming back, it will merge again, but it will also sort it, and in this way when we reach at top, it will be sorted. 

let arr = [21, 45, 7, 8, 3, 2, 6];

function MergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    return Merge(left, right);
}

function Merge(left,right) {
    let i = 0;
    let j = 0;
    let res = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        }
        else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
console.log(MergeSort(arr))