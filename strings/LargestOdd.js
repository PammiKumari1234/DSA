// Largest odd number in a string. 

let s = "54012875531498";
function Odd() {
    for(let i=s.length-1;i>0;i--){
        if(s[i]%2==1){
            return s.slice(0,i+1);
        }
    }
    return []
}
console.log(Odd()); 

TC- O(n)
SC- O(1)