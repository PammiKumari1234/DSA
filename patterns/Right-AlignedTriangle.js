//     *
//    **
//   ***
//  ****
// *****

// let n=5;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<n-(i+1);j++){
//         row+=" "
//     }
//     for(let k=0;k<=i;k++){
//         row+="*"
//     }
//     console.log(row);
// }

// *****
//  ****
//   ***
//    **
//     *

n=5;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<i;j++){
        row+=" "
    }
    for(let k=0;k<n-i;k++){
        row+="*"
    }
    console.log(row);
}