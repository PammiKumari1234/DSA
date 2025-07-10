//Check if the number is pallindrome or not.

let n=3223;
let nCopy=n;
function Pallindrome(n){
    let rev=0;
    while(n>0){
        let rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
    }
    if(rev===nCopy){
        console.log("Pallindrome");
    }
    else{
        console.log("Not a pallindrome");
    }
}
Pallindrome(n)

//TC- O(log n)- You're dividing n by 10 in each iteration of the loop.So the number of iterations is proportional to the number of digits in n.
//SC- O(1)