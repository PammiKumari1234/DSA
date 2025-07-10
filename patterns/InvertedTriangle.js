// *****
// ****
// ***
// **
// *

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=n-i;j>0;j--){
//         row+="*";
//     }
//     console.log(row);
// }

// 12345
// 1234
// 123
// 12
// 1

let n=5;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n-i;j++){
        row+=j+1;
    }
    console.log(row);
}