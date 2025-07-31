// Two Sum - 1st appraoch is brute force and 2nd approach is  using Map. 1st step is to create a map and next step is loop to find the difference.

let arr = [1, 2, 3];
let target = 4;
function cc() {
    let map={};
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=i;
    }
    for (let i = 0; i < arr.length; i++){
        let pair = target - arr[i];
        if (map[pair] && map[pair] !== i) {
            return [i,map[pair]]
        }
    }
}
console.log(cc());

//TC- O(n)
//SC- O(n)