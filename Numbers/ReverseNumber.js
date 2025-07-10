//Reverse a number.

let n=962;
function Reverse(){
    let rev=0;
    while(n>0){
      let rem=n%10;
      rev=(rev*10)+rem;
      n=Math.floor(n/10);  
    }
    return rev;
}
console.log(Reverse())

//TC- O(log n)
//SC- O(1)